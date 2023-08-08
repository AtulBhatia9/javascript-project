const rp = require("request-promise");
const FRT_PUB_BASE_URL = "http://apis.fretron.com";
const TOKEN =
  "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODk5MzY1NDQsInVzZXJJZCI6ImViZTU3NTFhLWEwNWItNDZiNi05MWI0LTFjMTEyYTkwZjYzOCIsImVtYWlsIjoic3V5YXNoLmt1bWFyQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTU1NTEwNzcwMCIsIm9yZ0lkIjoiM2U0Y2RlZTktMGIzYi00NmRkLTliOTgtZGYwZTM4YTAyNzFjIiwibmFtZSI6IlN1eWFzaCAiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.T4GXp6XVbgOlM3pNdN_0AFs53PjUm7pq2I7xZJtalt8";

async function getShipmentByFilter() {
  const url = `${FRT_PUB_BASE_URL}/shipment-view/shipments/v1?filters=%7B%22_shipmentTrackingStatus_%22%3A%7B%22_or%22%3A%7B%22_enroute_for_pickup_%22%3A%7B%22shipmentTrackingStatus%22%3A%5B%22Enroute%20For%20Pickup%22%5D%7D%2C%22_at_pickup_point_%22%3A%7B%22shipmentTrackingStatus%22%3A%5B%22At%20Pickup%20Point%22%5D%7D%7D%7D%2C%22__version%22%3A2%7D&size=200`;
  try {
    const options = {
      uri: url,
      method: "GET",
      json: true,
      headers: {
        Authorization: TOKEN,
      },
    };
    return await rp(options);
  } catch (error) {
    console.log(`Caught error in getting shipments - ${error.message}`);
  }
  return null;
}

async function ensureOrderById(orderId) {
  let url = `${FRT_PUB_BASE_URL}/shipment/v1/ensure/order-numbers?shId=${orderId}`;
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
      console.log(`ensure Order by id ${orderId} error: ${res.error}`);
    }
  } catch (e) {
    console.log(`ensure Order by id ${orderId} caught error: ${e.message}`);
  }
  return null;
}

async function main() {
  try {
    let shs = await getShipmentByFilter();
    console.log(`Length of sh : ${shs.length}`);
    for (let i = 0 ; i<shs.length ; i++) {
      console.log(i)
      let sh = shs[i]
      let shId = sh?.uuid;
      if (shId) {
        try {
          await ensureOrderById(shId);
        } catch (error) {
          console.log(
            `Error while processing shipment with shId ${shId}: ${error.message}`
          );
        }
      }
    }
  } catch (error) {
    console.log(`Caught Error in main function: ${error.message}`);
  }
}
main();
