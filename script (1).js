const rp = require("request-promise");
const FRT_PUB_BASE_URL = "http://apis.fretron.com";
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTAzNTU5MjYsInVzZXJJZCI6ImViZTU3NTFhLWEwNWItNDZiNi05MWI0LTFjMTEyYTkwZjYzOCIsImVtYWlsIjoic3V5YXNoLmt1bWFyQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTU1NTEwNzcwMCIsIm9yZ0lkIjoiM2U0Y2RlZTktMGIzYi00NmRkLTliOTgtZGYwZTM4YTAyNzFjIiwibmFtZSI6IlN1eWFzaCAiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.hTaZxM9xmskkE9Dy_mvaLcpBITTN28Bi1x2tE7UnlKc";

async function getDispatchManagements(filters, from) {
  let soFilter = {"lineItems.status":[],"secondaryStatus":[],"salesBranch":[],"customer":[],"orderDate":{"from":null,"till":null},"consignee":[],"consigner":[],"origin":[],"destination":[],"route":[],"salesOffice.zoneName":[],"salesOffice.regionName":[],"contractBranch.name":[],"_not":{"lineItems.status":["CLOSED"]},"orderNumber":[]}
  try {
    let url
    if(from.length > 0){
    url = `${FRT_PUB_BASE_URL}/shipment-view/freightunits/v2/freightunits/extendedV3?groupLimit=200&filters=${encodeURIComponent(JSON.stringify(filters))}&soFilters=${encodeURIComponent(JSON.stringify(soFilter))}&from=${encodeURIComponent(JSON.stringify(from))}`;
    }
    else{
      url = `${FRT_PUB_BASE_URL}/shipment-view/freightunits/v2/freightunits/extendedV3?group1Limit=100&filters=${encodeURIComponent(JSON.stringify(filters))}&soFilters=${encodeURIComponent(JSON.stringify(soFilter))}`;
    }
    let res = await rp({
      uri: url,
      method: 'GET',
      json: true,
      headers: {
        Authorization: TOKEN
      }
    });
    return res.length ? res : [];
  } catch (e) {
    console.log(`Error getting dispatch managements: ${e.message}`);
    return [];
  }
}

async function putFreightUnit(freightUnit) {
  try {
    let url = `${FRT_PUB_BASE_URL}/order-manager-v2/v1/admin/freight-unit`
    let res = await rp({
      uri: url,
      method: 'PUT',
      body: freightUnit,
      json: true,
      headers: {
        Authorization: TOKEN
      }
    });
    return res.length ? res : [];
  }
  catch (e) {
    console.log(`Error during  put freight unit: ${e.message}`)
    return []
  }
}

async function populateFUList(from) {
  let filters = {"lineItems.status":[],"lineItems.transporterId":[],"lineItems.loadTypeId":[],"documentDate":{"from":1687890600000,"till":1690482600000},"_customeField":null,"_not":{"type":["Temporary"],"lineItems.status":["FINALIZED","FINALIZATION_IN_PROGRESS"]}}
  let list = await getDispatchManagements(filters, from)
  console.log(`currList length : ${list.length}`)
  if(list.length >= 50){
    let lastFU = list[list.length-1]
    let newList = await populateFUList([lastFU.documentDate, lastFU.uuid])
    list.push(...newList);
  }
  return list
}

async function getFusByItemId(fuItemId) {
  let url = `${FRT_PUB_BASE_URL}/order-manager-v2/freight-units/v1/freight-units/by/linItemIds`;
  try {
    let res = await rp({
      method: "POST",
      uri: url,
      body: [fuItemId],
      json: true,
      headers: {
        Authorization: TOKEN,
      },
    });
    if (res.status === 200) {
      return res.data;
    } else {
      console.log(`Get Freight Unit by item id ${fuItemId} error: ${res.error}`);
    }
  } catch (e) {
    console.log(`Get Freight Unit by id ${fuItemId} caught error: ${e.message}`);
  }
  return [];
}

async function getOrdersByFilter(fuItemId, filters) {
  let url = `${FRT_PUB_BASE_URL}/shipment-view/sales/v2/orders_new?byLineItems=false&orderOrEnquiry=order&limit=500&filters=${encodeURIComponent(JSON.stringify(filters))}`;
  try {
    let res = await rp({
      method: "GET",
      uri: url,
      json: true,
      headers: {
        Authorization: TOKEN,
      },
    });
    if (res?.length) {
      return res
    } else {
      console.log(`Error: Unable to get order with uuid ${fuItemId}.`);
    }
  } catch (e) {
    console.log(`Error in getOrderById: ${e.message}`);
  }
  return [];
}

let failedList = []
async function main() {
  try {
    let fuList = await populateFUList([])
    console.log(`Total length of dispatch Managements: ${fuList.length}`);
    for (let fu of fuList) {
      if (fu.companyCode) { continue; }
      if (fu?.lineItems?.length > 0) {
        let fuItemId = fu.lineItems[0].uuid;
        if (fuItemId) {
          let masterFus = await getFusByItemId(fuItemId);
          let masterFu = masterFus?.length ? masterFus[0] : null
          if (masterFu) {
            let filters = {
              "_nested": {
                "_path": "lineItems",
                "_include_nested_hits": true,
                "lineItems.freightUnitLineItemIds": [fuItemId]
              }
            };
            let orders = await getOrdersByFilter(fuItemId, filters);
            if (orders?.length) {
              let companyCodeFromOrder = orders[0].consignmentBranch?.companyCode;
              console.log(`Company Code from Order: ${companyCodeFromOrder !== null ? companyCodeFromOrder : "Not available"}`);
              if (companyCodeFromOrder) {
                masterFu.companyCode = companyCodeFromOrder
                let res = putFreightUnit(masterFu)
                if(res.length === 0){ failedList.push(masterFu.documentNumber)}
                else{ console.log(`Updated Freight Unit With UUID: ${masterFu.uuid} ${masterFu.documentNumber}`) }             
              }
            } else {
              console.log(`No order found for UUID: ${fuItemId}`);
            }

          } else {
            console.log(`No Freight Unit found for UUID: ${fuItemId}`);
          }
        } else {
          console.log(`UUID not found`);
        }
      } else {
        console.log(`No line items found for the dispatch management.`);
      }
    }

  } catch (error) {
    console.log(`Error in main: ${error.message}`);
  }
}

main();