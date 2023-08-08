const rp = require("request-promise");
const FRT_PUB_BASE_URL = "http://apis.fretron.com";
const _ = require("lodash");

const TOKEN =
  "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODk5MTk2ODQsInVzZXJJZCI6ImViZTU3NTFhLWEwNWItNDZiNi05MWI0LTFjMTEyYTkwZjYzOCIsImVtYWlsIjoic3V5YXNoLmt1bWFyQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTU1NTEwNzcwMCIsIm9yZ0lkIjoiZTkwNWE2NTEtM2IxNS00NzkxLWFhZDYtNjNiM2ZkNzg0ZDBlIiwibmFtZSI6IlN1eWFzaCAiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.JnC-tr5irGW2xqFBXIgt6xk7W8q-jaWXRKakn6fun-I";

async function getShipmentByFilter() {
  let filter = {
    "fleetInfo.vehicle.vehicleRegistrationNumber": ["NL01AG3129", "NL01AD0083"],
    __version: 2,
    shipmentDate: {
      isTillExpression: false,
      isFromExpression: false,
      from: 1685599680000,
      till: 1689791379000,
    },
    _shipmentStatus_: { shipmentStatus: ["Created", "Planned"] },
  };
  const url = `${FRT_PUB_BASE_URL}/shipment-view/shipments/v1?filters=${encodeURIComponent(
    JSON.stringify(filter)
  )}`;
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

async function bulkSyncApi(payload, TOKEN) {
  const url = `${FRT_PUB_BASE_URL}/shipment/v1/shipment/bulk/sync`;
  try {
    const res = await rp({
      method: "POST",
      uri: url,
      body: payload,

      headers: {
        Authorization: TOKEN,
      },
      json: true,
    });

    console.log(`Bulk Sync api response status: ${res.status}`);
    if (res.status === 200) {
      return res.data;
    } else {
      console.log(`Bulk Sync api response error: ${res.error}`);
    }
  } catch (e) {
    console.log(`Caught Error in Bulk Sync api: ${e.message}`);
  }
  return null;
}

async function main() {
    try {
      let shs = await getShipmentByFilter();
      console.log(shs.length);
      if (shs.length > 0) {
        for (let sh of shs) {
          let shipmentStages = sh.shipmentStages ?? [];
          console.log(`For sh ${sh.shipmentNumber}`)      
          let shipmentPayload = {
            "shipmentId": sh.uuid,
            "updates": [],
          };
          let updates = []
          let shDate  =  shipmentStages[0].arrivalTime ?? sh.shipmentDate
          console.log(shDate)
          if(shipmentStages[0].arrivalTime == null){
             
             updates.push(
                {
                    keyToUpdate: "arrivalTime",
                    updatedValue: shDate,
                    stageId: shipmentStages[0].uuid,
                  }
             )
             updates.push(
                {
                    keyToUpdate: "departureTime",
                    updatedValue: shDate+1*60*60*1000,
                    stageId: shipmentStages[0].uuid,
                  }
             )
          }
          else{
            if(shipmentStages[0].departureTime == null){
                updates.push(
                    {
                        keyToUpdate: "departureTime",
                        updatedValue: shDate+1*60*60*1000,
                        stageId: shipmentStages[0].uuid,
                      }
                 )  
            }
          }

          if(shipmentStages[1].arrivalTime == null){

            updates.push(
                {
                    keyToUpdate: "arrivalTime",
                    updatedValue: (shDate) + 6*60*60*1000,
                    stageId: shipmentStages[1].uuid,
                  }
             )
             updates.push(
                {
                    keyToUpdate: "departureTime",
                    updatedValue: (shDate) +7*60*60*1000,
                    stageId: shipmentStages[1].uuid,
                    "markComplete":true
                  }
             )
          }
          else{
            if(shipmentStages[1].departureTime == null){
                updates.push(
                    {
                        keyToUpdate: "departureTime",
                        updatedValue: shipmentStages[1].arrivalTime+1*60*60*1000,
                        stageId: shipmentStages[1].uuid,
                        "markComplete":true
                      }
                 )
            }
          }
          shipmentPayload.updates = updates
          console.log(JSON.stringify(shipmentPayload));
          await bulkSyncApi(shipmentPayload, TOKEN);
         
        }
      } else {
        console.log("No shipment found or Error in getting shipment");
      }
    } catch (error) {
      console.log(`Caught Error in main function: ${error.message}`);
    }
  }
  
  main().then(_=>{
    console.log("DONE")
  })
  .catch(e=>{
    console.log(`Some error ${e}`)
  })
  



