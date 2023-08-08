const rp = require("request-promise");
const _ = require("lodash");
const TOKEN =
  "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODgyMzgyNzAsInVzZXJJZCI6ImViZTU3NTFhLWEwNWItNDZiNi05MWI0LTFjMTEyYTkwZjYzOCIsImVtYWlsIjoic3V5YXNoLmt1bWFyQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTU1NTEwNzcwMCIsIm9yZ0lkIjoiNDk1Yjg3MjgtYzc2MS00ZmE3LTgzZmUtZGI3NWE3ZDYzMjIxIiwibmFtZSI6IlN1eWFzaCAiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.hav-HyNtliFc2YSe4BH-xj3IN1eu59eVHenXRvAfR_M";

async function getShipmentsBatch(TOKEN) {

  var url = `https://apis.fretron.com/shipment-view/shipments/v1?limit=50&sortBy=earliestDate`;

  try {
    var options = {
      uri: url,
      method: "GET",
      json: true,
      headers: {
        Authorization: TOKEN,
      },
    };

    let shipments = await rp(options);
    var allShipments = [];
    allShipments = shipments;
    console.log(`Fetched ${shipments.length} shipments`);

    while (shipments.length === 50) {
      // Update the 'from' value for the next batch
      let lastSh = shipments[shipments.length - 1];
      from = [lastSh.shipmentDate, lastSh.uuid]; 

      url = `https://apis.fretron.com/shipment-view/shipments/v1?limit=50&sortBy=earliestDate`;
      url = url + "&from=" + encodeURIComponent(JSON.stringify(from));

      options.uri = url;
      shipments = await rp(options);
      console.log(
        `last SH no.: ${shipments[shipments.length - 1]?.shipmentNumber}`
      );
      allShipments = [...allShipments, ...shipments]
    }
  } catch (error) {
    console.log(`Caught error in getting shipments - ${error.message}`);
  }
  return allShipments ? allShipments : [];
}

async function main() {
//   var till = Date.now();
//   var from = till - 30 * 24 * 60 * 60 * 1000;

  const shipments = await getShipmentsBatch(TOKEN);
  
  console.log(`Total Shipments: ${shipments.length}`);

  const groupedShipments = _.groupBy(shipments, (sh) => {
    const fleetInfo = sh.fleetInfo;
    let transporter =
      fleetInfo?.broker?.name ??
      fleetInfo?.fleetOwner?.name ??
      fleetInfo?.forwardingAgent?.name ??
      null;
    if (transporter) {
      transporter = transporter.trim();
    }
    return transporter;
  });
  console.log(`Grouped Shipment : ${groupedShipments}`);
  const finalShipmentData = _.mapValues(groupedShipments, (shipments) => {
    const uniqueVehicles = _.uniqBy(
      shipments.map((sh) => sh.fleetInfo.vehicle.vehicleRegistrationNumber)
    );
    return {
      "shipment count": shipments.length,
      "vehicle count": uniqueVehicles.length,
    };
  });
  console.log("Shipment Data:", finalShipmentData);
}
main();
