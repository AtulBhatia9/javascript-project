const rp = require("request-promise");
const rq = require("request");
const moment = require("moment");

const FRT_PUB_BASE_URL = "http://apis.fretron.com";
// const TOKEN = $event.body.metaData.token;
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODgzODMxNTYsInVzZXJJZCI6ImViZTU3NTFhLWEwNWItNDZiNi05MWI0LTFjMTEyYTkwZjYzOCIsImVtYWlsIjoic3V5YXNoLmt1bWFyQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTU1NTEwNzcwMCIsIm9yZ0lkIjoiMDZhY2FjN2YtNTY5Ny00ZmVmLTlhNjEtZWVmNDdmNzUzNjdhIiwibmFtZSI6IlN1eWFzaCAiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.P7ZnPryODyXecVJKIOxFs0eon73Nd0hhGBA4a1CBUIA";
const vendorName = ["Suvishesh Logistics"];


async function fetchBillList(vendorName,fromTime,tillTime) {
    let url = `${FRT_PUB_BASE_URL}/shipment-view/vendor-bill/v1/vendor-bills?filters=${encodeURIComponent(
        JSON.stringify({
            "billDate": {
                "from": fromTime,
                "till": tillTime
            },
            "vendorName": [vendorName]
        })
    )}`;
    try {
        let request = {
            method: "GET",
            uri: url,
            headers: {
                "Content-Type": "application/json",
                Authorization: TOKEN,
            },
            json: true,
        };
        return rp(request).then((res) => {
            // console.log(`res from list view : ${JSON.stringify(res)}`)
            if (res?.length) {
                return { status: 200, data: res, error: null };
            } else {
                return { status: 400, data: null, error: "Error : " };
            }
        });
    } catch (e) {
        console.log(`Error while fetching vendor bill list ${e.message}`);
        return { status: 400, data: null, error: "Error : " + e.message };
    }
}

function getChargeAmountAndCFValue(list, key, action) {
    if (action === "costs") {
        let cost = list?.find((ele) => ele?.charge?.name === key);
        if (cost) return cost?.charge?.amount;
        else return null;
    } else {
        let cf = list.find((ele) => ele.fieldKey === key);
        if (cf) return cf?.value;
        else return null;
    }
}

async function mapReportData(item) {
    let vehicleNo = item?.lineItems[0]?.entityInfo?.resourceIdentifier;
    let vendorName = item?.vendor?.name;
    let kmRun = item?.lineItems[0]?.cfs?.length
        ? getChargeAmountAndCFValue(
            item?.lineItems[0]?.cfs,
            "KM run",
            "customFields"
        )
        : null;
    let extraKm = item?.lineItems[0]?.cfs?.length
        ? getChargeAmountAndCFValue(
            item?.lineItems[0]?.cfs,
            "Extra Km",
            "customFields"
        )
        : null;
    let commercial = item?.lineItems[0]?.cfs?.length
        ? getChargeAmountAndCFValue(
            item?.lineItems[0]?.cfs,
            "Commercial",
            "customFields"
        )
        : null;
    let extraKmAmount = getChargeAmountAndCFValue(
        item?.lineItems[0]?.costs,
        "Extra KM Amount",
        "costs"
    );
    let toll = getChargeAmountAndCFValue(
        item?.lineItems[0]?.costs,
        "Toll",
        "costs"
    );
    let otherCharges = getChargeAmountAndCFValue(
        item?.lineItems[0]?.costs,
        "Other Charge",
        "costs"
    );
    return {
        Vendor: vendorName ?? "NA",
        Vehicle: vehicleNo ?? "NA",
        "KM run": kmRun ?? 0,
        "Extra Km": extraKm ?? 0,
        Commercial: commercial ?? "NA",
        "Extra KM Amount": extraKmAmount ?? 0.0,
        Toll: toll ?? 0.0,
        "Other Charges": otherCharges ?? 0.0,
    };
}

async function fetchBillDetails(billUUID) {
    let url = `${FRT_PUB_BASE_URL}/shipment-cost/v1/vendor/bill/${billUUID}/expand-details`;
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
            console.log(`Error caught in fetching bill details : ${res.error}`);
        }
    } catch (e) {
        console.log(`Error caught in fetching bill details: ${e.message}`);
    }
    return null;
}

async function calReportData() {
    try {
        let billList = await fetchBillList(vendorName,fromTime,tillTime);
        console.log(`Billlist status : ${billList.status}`);
        console.log(`Billlist length : ${billList.data?.length}`);
        if (billList.status == 200) {
            let bills = billList.data;
            let obj = {};
            for (let bill of bills) {
                let billDetail = await fetchBillDetails(bill.uuid);
                console.log(`MasterBillFound : ${billDetail != null}`)
                let category = (billDetail.customFields ?? []).find( ({fieldKey}) => fieldKey == "Category")?.value
                let invoicePeriod = (billDetail.customFields ?? []).find( ({fieldKey}) => fieldKey == "Invoice Period")?.value
                let gstInfo = (billDetail.customFields ?? []).find( ({fieldKey}) => fieldKey == "Gst Info")?.value
                let billWithLineItemList = billDetail?.lineItems ?? [];
                for (let item of billWithLineItemList) {
                    let vehicleRegNum = item?.entityInfo?.resourceIdentifier;
                    console.log(`BillId : ${billDetail.uuid} && vehNum ${vehicleRegNum}`)
                    let costs = item?.costs;
                    let extraKmRunCost = costs.find(cost => cost.charge.name === "Extra Per Km")
                    let perKmRunCost = costs.find(cost => cost.charge.name === "Per Km")
                    let itemCfs = item?.cfs;
                    let key = vehicleRegNum + "_" + category
                    if (!obj[key]) {
                        obj[key] = {
                            Vendor: vendorName,
                            Vehicle: vehicleRegNum,
                            "KM run": 0,
                            "Extra Km": 0,
                            Commercial: 0,
                            "Extra KM Amount": 0,
                            Toll: 0,
                            "Other Charges": 0,
                            "Category": category,
                            "Invoice Period": invoicePeriod,
                            "Gst Info": gstInfo

                        };
                    }

                    if (extraKmRunCost) {
                        obj[key]["Extra Km"] += extraKmRunCost.charge.base;
                        obj[key]["Extra KM Amount"] += extraKmRunCost.amount;
                    }

                    if (perKmRunCost) {
                        obj[key]["Extra Km"] += perKmRunCost.charge.base;
                        obj[key]["Extra KM Amount"] += perKmRunCost.amount;
                    }

                    let kmRun = parseFloat(itemCfs.find(({ fieldKey }) => fieldKey === "TotalKmRun")?.value ?? "0.0");

                    if (kmRun) { obj[key]["KM run"] += kmRun; }

                    let commercialCost = costs.find((cost) => cost.charge.name === "Commercial");
                    let tollCost = costs.find((cost) => cost.charge.name === "Toll");
                    let otherChargesCost = costs.find((cost) => cost.charge.name === "OtherCharges");
                    obj[key]["Toll"] += tollCost?.amount ?? 0.0;
                    obj[key]["Other Charges"] += otherChargesCost?.amount ?? 0.0;
                    obj[key]["Commercial"] += commercialCost?.amount ?? 0.0;
                }
            }
            return Object.values(obj);
        }
    } catch (e) {
        console.log(e);
        return "Error : " + e.message;
    }
}
async function main() {
  let jsonArr = await calReportData();
  console.log(jsonArr);
  // return rq({
  //   method: "POST",
  //   uri: `${FRT_PUB_BASE_URL}/shipment-view/shipment/v1/json-to-xlsx/download`,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: jsonArr,
  //   json: true,
  // }).pipe(_httpRes);
}

main();
