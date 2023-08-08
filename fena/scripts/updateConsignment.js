const rp = require("request-promise");
const TOKEN = `Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTE0NzczMTMsInVzZXJJZCI6ImE0MmU1MzljLTg4ZjMtNDJjZi1hMWU3LWQxM2UwYjYwODMzZCIsImVtYWlsIjoic3lzdGVtX2ludGVncmF0aW9uQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTAwMDAwMDAwMCIsIm9yZ0lkIjoiM2U0Y2RlZTktMGIzYi00NmRkLTliOTgtZGYwZTM4YTAyNzFjIiwibmFtZSI6IlN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjp0cnVlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.buHcJeQdi3tcMR5J3r3q-teKTlzVQRXnMqdjhlN0EY0`;
var FRT_PUB_BASE_URL = "https://apis.fretron.com";


async function populateConsignments() {
  let cns = []
  let from = null
  let size = 1000
  while (true) {
    let currChunk = await getCnsByFilter(from, size)
    if (currChunk.length == size) {
      let lastCn = currChunk[size - 1].consignment
      from = [lastCn.consignmentDate, lastCn.uuid]
      cns = [...cns, ...currChunk]
    } else if (currChunk.length < size) {
      cns = [...cns, ...currChunk]
      break;
    }
  }
  return cns
}

async function getCnsByFilter(from, size) {
  let filters = { "_shipment_": { "shipmentNumber": [], "vehicleRN": [], "shipmentType": [], "shipmentEdd": { "from": null, "till": null }, "shipmentDate": { "from": null, "till": null }, "_origin_": null, "_destination_": null, "challanBranchName": [], "challanZoneName": [], "challanRegionName": [] }, "_consignment_": { "status": [], "trackingStatus": [], "edd": { "from": null, "till": null }, "consignee": [], "consigner": [], "consignerPlace": [], "consigneePlace": [], "customer": [], "consignmentDate": { "from": 1688194140000, "till": 1691433060000 }, "material": [], "invoiceValue": null, "billToParty": [], "branch": [], "zone": [], "region": [], "podEdd": { "from": null, "till": null }, "podSubmissionDate": { "from": null, "till": null }, "podStatus": [], "podFeedingStatus": null, "consignmentDeliveryDate": null, "podTrackingStatus": [], "invoiceStatus": [] } };
  let allFields = ["consignment.uuid", "consignment.contractToParty", "consignment.consignmentDate"]
  let url = `${FRT_PUB_BASE_URL}/shipment-view/consignments/enriched?filters=${encodeURIComponent(JSON.stringify(filters))}&allFields=${encodeURIComponent(JSON.stringify(allFields))}`;
  if (from) { url += `&from=${encodeURIComponent(JSON.stringify(from))}` }
  if (size) { url += `&size=${size}` }
  try {
    let res = await rp({
      method: "GET",
      uri: url,
      headers: {
        Authorization: TOKEN,
      },
      json: true,
    });
    return res.length ? res : [];
  } catch (e) {
    console.log(`Error caught in getting cns : ${e.message}`);
  }
  return [];
}

async function getCnById(uuid) {
  let url = `${FRT_PUB_BASE_URL}/shipment/v1/consignment/${uuid}/shipments`
  try {
    let res = await rp({
      method: "GET",
      uri: url,
      headers: {
        Authorization: TOKEN
      },
      json: true
    });
    console.log(`Get cn by cnId ${uuid} status: ${res.status}`)
    if (res.status == 200) {
      return res.data.consignment
    } else {
      console.log(`Get cn by cnId ${uuid} error: ${res.error}`)
    }
  } catch (e) {
    console.log(`Caught error in getting cn by id : ${e.message}`)
  }
  return null
}

async function putConsignment(payload) {
  const url = `${FRT_PUB_BASE_URL}/consignment/v1/admin/consignment`;
  try {
    const res = await rp({
      method: "PUT",
      uri: url,
      body: payload,
      json: true,
    });
    console.log(`PUT Cn api response status: ${res.status}`);
    if (res.status == 200) {
      return res.data;
    } else {
      console.log(`PUT Cn api response error: ${res.error}`);
    }
  } catch (e) {
    console.log(`Caught Error in update cn api: ${e.message}`);
  }
  return null;
}

async function main() {
  let successList = []
  let failedList = []
  let totalCnsToUpdate = 0
  try {
    let allcns = await populateConsignments();
    console.log(`Total length of all cns ${allcns.length}`);
    for (let e of allcns) {
      let cn = e.consignment;
      let cnId = cn?.uuid;
      if (cn.contractToParty != null) { continue; }
      try {
        let masterCn = await getCnById(cnId);
        if (masterCn && masterCn.contractToParty == null) {
          totalCnsToUpdate++
          let customer = masterCn.consignee;
          masterCn.contractToParty = JSON.parse(JSON.stringify(customer));
          let updatedCn = await putConsignment(masterCn)
          if(updatedCn){ successList.push(cnId) }
        } else {
          console.log(`Master Cn not found for cnId: ${cnId}`);
        }
      } catch (e) {
        console.log(`Catched error in updating cn ${cnId} : ${e.message}`)
        failedList.push(cnId)
      }
    }
  } catch (error) {
    console.log(`Error in main: ${error.message}`);
  }
  console.log(`TotalCnsToUpdate : ${totalCnsToUpdate}`)
  console.log(`SuccessList Length : ${successList.length}`)
  console.log(`SuccessList : ${successList}`)
  console.log(`FailedList Length : ${failedList.length}`)
  console.log(`FailedList : ${failedList}`)
}
main()