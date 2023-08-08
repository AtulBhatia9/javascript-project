const rp = require("request-promise");
const TOKEN = ``;
const FRT_PUB_BASE_URL = "http://apis.fretron.com";

async function main() {
  try {
    let shId = "";
    let shipment = await getShipmentById(shId);
    if (!shipment) {
      console.log(`Shipment with ID ${shId} not found.`);
      return;
    }
    const freightUnitLineItemId = shipment.freightUnitLineItemId;

    const freightUnit = await getFuByItemId(freightUnitLineItemId);

    let orderId =
      freightUnit[0].lineItems[0]?.salesOrderMappings[0]?.orderId ?? null;

    let order = await getOrderById(orderId);

    let plant = order.salesOffice?.name?.toUpperCase() || "";
    const fleetInfo = shipment.fleetInfo;
    let vehicleNo = fleetInfo.vehicle?.vehicleRegistrationNumber;
    let driver = fleetInfo ? fleetInfo.driver : null;
    let driverName = driver && driver.name ? driver.name : "";
    let driverNumber = driver && driver.mobileNumber ? driver.mobileNumber : "";

    let transporterName =
      fleetInfo?.broker?.name ??
      fleetInfo?.fleetOwner?.name ??
      fleetInfo?.forwardingAgent?.name ??
      null;

    const stages = shipment.shipmentStages;
    const lastStage = stages[stages.length - 1];

    let destinationArrivalTime = lastStage?.arrivalTime ?? "";
    let date = "";
    let time = "";
    if (destinationArrivalTime) {
      const destArrivalTimeDate = new Date(destinationArrivalTime);
      date = destArrivalTimeDate.toLocaleDateString();
      time = destArrivalTimeDate.toLocaleTimeString();
    } else {
      console.log("No destination arrival time available.");
    }

    let lrNumber = getValueForCf(shipment, "LR Number");
    let helperName = getValueForCf(shipment, "Helper Name");
    let grossWeight = getValueForCf(shipment, "Gross Weigth");
    let tareWeight = getValueForCf(shipment, "Tare Weigth");
    let netWeight = getValueForCf(shipment, "Net Weigth");
    let lrDate = getValueForCf(shipment, "LR Date");
    let lrDateInENGB = new Date(lrDate * 1000).toLocaleString("en-GB");
    let boe = getValueForCf(shipment, "BOE");

    let matchingLineItems = order.lineItems.filter(
      (item) => item.externalid === boe
    );

    if (matchingLineItems.length === 0) {
      console.log("No matching line items found for BOE:", boe);
      return;
    }

    let materialCode = matchingLineItems.material?.externalId || "";
    let materialDescription =
      matchingLineItems.material?.materialDescription || "";
    let typeOfMaterial = matchingLineItems.material?.controlCode || "";
    let vendorName = matchingLineItems.consigner?.name || "";
    let cityOfOrigin = matchingLineItems.consigner?.places?.[0]?.name || "";
    let netQuantity =
      matchingLineItems.loadInfo?.standardMeasurement?.weight?.netQuantity || 0;
    let diffOfGrossAndTare = grossWeight - tareWeight;

    let challanWeight = Math.min(netQuantity, netWeight, diffOfGrossAndTare);

    let poLineItemNumbers = [];

    for (const matchedLineItem of matchingLineItems) {
      let poLineItemNumber = getValueForLineItemCf(
        matchedLineItem,
        "PO Line Item Number"
      );
      poLineItemNumbers.push(poLineItemNumber);
    }
    let transporterCode = findTunaPortCodeFromFleetOwner(shipment);

    let hsnCode = getValueForOrderCf(order, "HSN Code");
    let validityDate = getValueForOrderCf(order, "PO Validity");

    const value = returnAOrBOrC("A", "B", "C");

    const payload = {
      shipmentId: shId,
      ETGATE: "MG3",
      GPTYPE: "INBOUND",
      PARK_TOKEN_NO: "",
      WERKS: plant,
      EBELN: orderId,
      EBELP: poLineItemNumbers,
      MATNR: materialCode,
      MAKTX: materialDescription,
      KDATE: validityDate,
      HSNCODE: hsnCode,
      REMARK: typeOfMaterial,
      LIFNR: vendorName,
      ORT01: cityOfOrigin,
      VEH_NO: vehicleNo,
      VEHTYP: "OPEN MARKET VEHICLE",
      VEHICLE_MODEL: "",
      PUC: "",
      PUCDATE: "",
      INSURANCE_VALIDITY_DATE: "",
      VEHICLE_WEIGHT_CAPACITY: "",
      VEHICLE_WEIGHT_CAPACITY_UOM: "TO",
      TRANS: transporterName,
      TRANS_CODE: transporterCode,
      LRNO: lrNumber,
      LRDATE: lrDateInENGB,
      DRIVER_NAME: driverName,
      MOBILENO: driverNumber,
      LICNO: "",
      LIC_EXP_DATE: "",
      HELPER_NAME: helperName,
      EWAY_BILL_NO: "",
      EWAY_BILL_EXPIRY: "",
      PORT_WB_GROSS_WEIGHT: grossWeight,
      PORT_WB_TARE_WEIGHT: tareWeight,
      PORT_WB_NET_WEIGHT: netWeight,
      ABLFZ: challanWeight,
      CHALLAN_WEIGHT_UOM: "KG",
      DCNO: "",
      DCDATE: "",
      INS_VLD: "X",
      STPNY: "X",
      RC_VLD: "X",
      ENTRY_DATE: "",
      ENTRY_TIME: "",
      WORKING_SHIFT: value,
      GEDATE: date,
      GETIME: time,
      REMARK: "",
    };

    console.log("Payload:", payload);

    // const welspunResponse = await dataToWelspun(payload);
    console.log("Response from Welspun API:", welspunResponse);
  } catch (error) {
    console.log("Error occurred in main:", error.message);
  }
}

async function getFuByItemId(freightUnitLineItemId) {
  let url = `${FRT_PUB_BASE_URL}/order-manager-v2/freight-units/v1/freight-units/by/linItemIds`;
  try {
    let res = await rp({
      method: "POST",
      uri: url,
      body: [freightUnitLineItemId],
      json: true,
      headers: {
        Authorization: TOKEN,
      },
    });
    if (res.status === 200) {
      return res.data;
    } else {
      console.log(
        `Get Freight Unit by item id ${freightUnitLineItemId} error: ${res.error}`
      );
    }
  } catch (e) {
    console.log(
      `Get Freight Unit by id ${freightUnitLineItemId} caught error: ${e.message}`
    );
  }
  return null;
}

async function getOrderById(orderId) {
  let url = `${FRT_PUB_BASE_URL}/order-manager-v2/sales-orders/v1/order/${orderId}`;
  try {
    let res = await rp({
      method: "GET",
      uri: url,
      json: true,
      headers: {
        Authorization: TOKEN,
      },
    });
    if (res.status === 200) {
      return res.data;
    } else {
      console.log(`Get Order by id ${orderId} error: ${res.error}`);
    }
  } catch (e) {
    console.log(`Get Order by id ${orderId} caught error: ${e.message}`);
  }
  return null;
}

async function getShipmentById(shId) {
  let url = `${FRT_PUB_BASE_URL}/shipment/v1/admin/shipment/${shId}?skipCn=true`;
  try {
    let res = await rp({
      method: "GET",
      uri: url,
      json: true,
    });
    if (res.status == 200) {
      return res.data;
    } else {
      console.log(`Get shipment by id ${shId} error: ${res.error}`);
    }
  } catch (e) {
    console.log(`Get shipment by id ${shId} caught error: ${e.message}`);
  }
  return null;
}

async function dataToWelspun(payload) {
  const url = `https://mumwmlapdev.welspungrp.com:44300/sap/opu/odata/sap/ZMMFRETRON107_SRV/GateEntrySet`;
  console.log("Payload:", payload);
  try {
    const res = await rp({
      method: "POST",
      uri: url,
      body: payload,
      headers: {
        Authorization: "",
      },
      json: true,
    });
    console.log(`Data to Welspun API response status: ${res.status}`);
    if (res.status == 200) {
      return res.data;
    } else {
      console.log(`Data to Welspun API response error: ${res.error}`);
    }
  } catch (e) {
    console.log(`Caught Error in Data to Welspun API: ${e.message}`);
  }
}

function getValueForCf(sh, key) {
  let shCfs = sh.customFields;
  let reqCf = shCfs.find((it) => it.fieldKey == key);
  return reqCf ? reqCf.value : "";
}

function getValueForOrderCf(order, key) {
  let orderCfs = order.customFields;
  let reqCf = orderCfs.find((it) => it.fieldKey == key);
  return reqCf ? reqCf.value : "";
}

function getValueForLineItemCf(lineItem, key) {
  let lineItemCfs = lineItem.customFields;
  let reqCf = lineItemCfs.find((it) => it.fieldKey === key);
  return reqCf ? reqCf.value : "";
}

function findTunaPortCodeFromFleetOwner(shipment) {
  const fleetOwner = shipment?.fleetInfo?.fleetOwner;
  if (!fleetOwner) return null;

  const customFields = fleetOwner.customFields;
  const tunaPortCodeField = customFields.find(
    (field) => field.fieldKey === "Tuna Port Code"
  );
  return tunaPortCodeField ? tunaPortCodeField.value : null;
}

function returnAOrBOrC(a, b, c) {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return a;
    case 1:
      return b;
    case 2:
      return c;
    default:
      return a;
  }
}

main();
