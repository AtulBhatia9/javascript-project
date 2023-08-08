const rp = require("request-promise");
const FRT_PUB_BASE_URL = "http://apis.fretron.com";
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTAzNTU5MjYsInVzZXJJZCI6ImViZTU3NTFhLWEwNWItNDZiNi05MWI0LTFjMTEyYTkwZjYzOCIsImVtYWlsIjoic3V5YXNoLmt1bWFyQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTU1NTEwNzcwMCIsIm9yZ0lkIjoiM2U0Y2RlZTktMGIzYi00NmRkLTliOTgtZGYwZTM4YTAyNzFjIiwibmFtZSI6IlN1eWFzaCAiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.hTaZxM9xmskkE9Dy_mvaLcpBITTN28Bi1x2tE7UnlKc";

async function getDispatchManagements() {
  try {
    let filters = {
      "documentDate": {
        "from": 1688204160000,
        "till": 1690450560000
      }
    };
    let url = `${FRT_PUB_BASE_URL}/shipment-view/freightunits/v2/freightunits/extendedV3?group1=null&group1Limit=100&filters=${encodeURIComponent(JSON.stringify(filters))}&soFilters={}`;
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

async function getFuByItemId(fuItemId) {
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

async function getOrdersByFilter(fuItemId) {
  let filters = {
    "_nested": {
      "_path": "lineItems",
      "_include_nested_hits": true,
      "lineItems.freightUnitLineItemIds": [fuItemId]
    }
  };
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

async function main() {
    try {
      let dispatchManagements = await getDispatchManagements();
      console.log(`Total length of dispatch Managements: ${dispatchManagements.length}`);
  
      if (dispatchManagements && dispatchManagements.length > 0) {
        for (let dispatchManagement of dispatchManagements) {
          if (dispatchManagement.lineItems && dispatchManagement.lineItems.length > 0) {
            let fuItemId = dispatchManagement.lineItems[0].uuid;
            if (fuItemId) {
              let freightUnit = await getFuByItemId(fuItemId);
              if (freightUnit && freightUnit.length > 0) {
                let companyCodeFromFu = freightUnit[0].companyCode;
                console.log(`Company Code from Fu: ${companyCodeFromFu !== null ? companyCodeFromFu : "Not available"}`);
  
                if (companyCodeFromFu === null) {
                  let orders = await getOrdersByFilter(fuItemId);
                  if (orders && orders.length) {
                    let companyCodeFromOrder = orders[0].consignmentBranch?.companyCode;
                    console.log(`Company Code from Order: ${companyCodeFromOrder !== null ? companyCodeFromOrder : "Not available"}`);
                  } else {
                    console.log(`No order found for UUID: ${fuItemId}`);
                  }
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
      } else {
        console.log("No dispatch managements found in the response.");
      }
    } catch (error) {
      console.log(`Error in main: ${error.message}`);
    }
  }
  main();