const rp = require(`request-promise`);
const FRT_BASE_URL = "http://apis.fretron.com";
const TOKEN =
  "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODgwMzE4MDcsInVzZXJJZCI6ImViZTU3NTFhLWEwNWItNDZiNi05MWI0LTFjMTEyYTkwZjYzOCIsImVtYWlsIjoic3V5YXNoLmt1bWFyQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTU1NTEwNzcwMCIsIm9yZ0lkIjoiNDcyYjNjNTEtZDhlOS00Mjk0LThhN2YtYTY5MDkzYjUwNWI3IiwibmFtZSI6IlN1eWFzaCAiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.Tu6YwexXDHMrfkPxGyWT--IB2lvCWNm2N1ZMwfcT8Yg";

//constants
const TYPE = "Type";
const CATEGORY = "Category";
const LR_NUMBER = "LR Number";
const BATCH = "Batch";
const INSURANCE_NO = "Insurance No.";

async function getShipmentsByFilter() {
  try {
    const currentEpoch = Date.now();
    let filters = {
      _shipmentStatus_: {
        shipmentStatus: ["Completed"],
        completionTime: {
          isTillExpression: false,
          isFromExpression: false,
          from: currentEpoch - 24 * 60 * 60 * 1000,
          till: currentEpoch,
        },
      },
      _origin_: {
        _nested: {
          _path: "shipmentStages",
          "shipmentStages.tripPoint.purpose": ["Pickup"],
          _or: {
            "shipmentStages.place.name": ["IGL Gorakhpur"],
            "shipmentStages.hub.name": ["IGL Gorakhpur"],
          },
        },
      },
      _shcf_Type: ["Outbound"],
      __version: 2,
      _not: {
        _destination_: {
          _nested: {
            _path: "shipmentStages",
            "shipmentStages.tripPoint.purpose": ["Delivery"],
            _or: {
              "shipmentStages.place.name": [
                "lucknow - Gorakhpur road ( Dummy)",
              ],
              "shipmentStages.hub.name": ["lucknow - Gorakhpur road ( Dummy)"],
            },
          },
        },
      },
    };
    let url = `${FRT_BASE_URL}/shipment-view/shipments/v1?filters=${JSON.stringify(
      filters
    )}&allFields=true&size=500`;
    let options = {
      uri: url,
      json: true,
      method: "GET",
      headers: {
        Authorization: TOKEN,
      },
    };
    var response = await requestPromise(options);
    console.log(`Total shipments found - ${response.length}`);
    return response;
  } catch (error) {
    console.log(`Catched error in getting shipments - ${error.message}`);
  }
  return [];
}

function getValueForCf(sh, key) {
  let reqCf = sh.customFields?.find((it) => it.fieldKey === key);
  return reqCf ? reqCf.value : "";
}

async function ensurePod(cnId) {
  let url = `${FRT_BASE_URL}/pod/v1/action/ensure-pod?consignmentId=${cnId}`;
  try {
    let res = await rp({
      method: "GET",
      uri: url,
      headers: {
        Authorization: TOKEN,
      },
      json: true,
    });
    if (res.status == 200) {
      return res.data;
    } else {
      console.log(`Error caught in ensure pod : ${res.error}`);
    }
  } catch (e) {
    console.log(`Error caught in ensure pod : ${e.message}`);
  }
  return null;
}
async function main() {
  let jsonArray = [];
  try {
    let shipments = await getShipmentsByFilter();
    for (const sh of shipments) {
      try {
        let json = {};
        let fleetInfo = sh.fleetInfo;
        let vehicle = fleetInfo ? fleetInfo.vehicle : null;
        json["Vehicle Number"] =
          vehicle && vehicle.vehicleRegistrationNumber
            ? vehicle.vehicleRegistrationNumber
            : "";
        json["Type"] = getValueForCf(sh, TYPE);
        json["Category"] = getValueForCf(sh, CATEGORY);
        json["Shipment Number"] = sh.shipmentNumber;
        json["LR Number"] = getValueForCf(sh, LR_NUMBER);
        json["Batch"] = getValueForCf(sh, BATCH);
        json["Insurance No."] = getValueForCf(sh, INSURANCE_NO);

        const stages = sh.shipmentStages;
        const firstStage = stages[0];
        const lastStage = stages[stages.length - 1];

        let dispatchDateTime = new Date(
          firstStage?.departureTime ?? ""
        ).toLocaleString();
        json["Dispatch Date & Time"] = dispatchDateTime;

        let destinationName = lastStage.place
          ? lastStage.place.name
          : lastStage.hub
          ? lastStage.hub.name
          : "";
        json["Destination"] = destinationName;

        let destinationArrivalTime = new Date(
          lastStage?.arrivalTime ?? ""
        ).toLocaleString();
        json["Destination Arrival Date & Time"] = destinationArrivalTime;

        let source = firstStage?.place?.name ?? "";
        json["source"] = source;

        let unloadingOutdateandTime = lastStage?.actualActivityEndTime ?? "";
        json["Unloading Out Date & Time"] = unloadingOutdateandTime;

        //deliveryTAT
        destinationArrivalTime = lastStage?.arrivalTime ?? "";
        let originDeparture = firstStage?.departureTime ?? "";

        let deliveryTAT = "";
        if (destinationArrivalTime && originDeparture) {
          let deliveryTimeInMilliseconds =
            new Date(destinationArrivalTime) - new Date(originDeparture);
          let deliveryTimeInHours =
            deliveryTimeInMilliseconds / (1000 * 60 * 60);
          deliveryTAT = deliveryTimeInHours.toFixed(2);
        }

        json["Delivery TAT"] = deliveryTAT;

        //unloading TAT
        let destinationDepartureTime = lastStage?.departureTime ?? "";
        destinationArrivalTime = lastStage?.arrivalTime ?? "";

        let unloadingTAT = "";
        if (destinationDepartureTime && destinationArrivalTime) {
          let unloadingTATinMilliseconds =
            new Date(destinationDepartureTime) -
            new Date(destinationArrivalTime);
          let unloadingTATinHours =
            unloadingTATinMilliseconds / (1000 * 60 * 60);
          unloadingTAT = unloadingTATinHours.toFixed(2);
        }

        json["Unloading TAT"] = unloadingTAT;

        json["Transporter Name"] = fleetInfo.forwardingAgent?.name
          ? fleetInfo.forwardingAgent.name
          : fleetInfo.broker?.name
          ? fleetInfo.broker?.name
          : fleetInfo.fleetOwner?.name
          ? fleetInfo.fleetOwner?.name
          : "";

        let driver = fleetInfo ? fleetInfo.driver : null;
        json["Driver Name"] = driver && driver.name ? driver.name : "";
        json["Driver Mobile Number"] =
          driver && driver.mobileNumber ? driver.mobileNumber : "";

        let materials = [];
        let netQuantity = [];
        let consignee = [];
        let consignmentNumber = [];
        let lineItems = [];
        for (const consignment of sh.consignments) {
          let cnId = "";
          if (sh.consignments.length > 0) {
            cnId = sh.consignments[0].uuid;
          }

          for (const item of consignment.lineItems) {
            let materialName = item.material?.name ?? "";
            lineItems.push(materialName);
          }

          let material = consignment?.loadInfo?.material ?? "";
          materials.push(material);

          let quantity =
            consignment?.loadInfo?.standardMeasurement?.packageMeasurement
              ?.netQuantity ?? "";
          netQuantity.push(quantity);

          let consigneeName = consignment?.consignee?.name ?? "";
          consignee.push(consigneeName);

          let consignmentNo = consignment?.consignmentNo ?? "";
          consignmentNumber.push(consignmentNo);

          let podObject = await ensurePod(cnId);

          let podUploadingStatus = podObject.deliveryItems;

          let status = [];
          let remarks = [];

          for (let i = 0; i < podUploadingStatus.length; i++) {
            const deliveryItem = podUploadingStatus[i];

            status.push(deliveryItem.status);

            remarks.push(deliveryItem.remarks);
          }
          json["POD Uploading Status"] = status;

          json["POD Remarks"] = remarks;
        }

        json["Material"] = materials;
        json["QUANTITY"] = netQuantity;
        json["CONSIGNEE"] = consignee;
        json["Consignment Number"] = consignmentNumber;
        json["MATERIAL Line Item pipe seprated"] = lineItems.join(" | ");

        //unloading Status
        let shipmentTrackingStatus =
          sh.shipmentTrackingStatus === null ? "Completed" : "In-progress";
        json["Unloading Status"] = shipmentTrackingStatus;

        //Trip Status
        let shipmentStatus = sh.shipmentStatus;
        json["Trip Status"] = shipmentStatus;

        jsonArray.push(json);
      } catch (error) {
        console.log(`Error in processing shipment - ${error.message}`);
      }
    }
    return jsonArray;
  } catch (error) {
    console.log(`Error in main function - ${error.message}`);
  }
}
main()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(`Error in returning json array: ${error.message}`);
  });

