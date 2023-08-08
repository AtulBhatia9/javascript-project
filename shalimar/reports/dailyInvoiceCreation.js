const rp = require("request-promise");

const TOKEN = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTAxODE4ODAsInVzZXJJZCI6ImViZTU3NTFhLWEwNWItNDZiNi05MWI0LTFjMTEyYTkwZjYzOCIsImVtYWlsIjoic3V5YXNoLmt1bWFyQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTU1NTEwNzcwMCIsIm9yZ0lkIjoiNDk1Yjg3MjgtYzc2MS00ZmE3LTgzZmUtZGI3NWE3ZDYzMjIxIiwibmFtZSI6IlN1eWFzaCAiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.AS5Xob4BZu6p5kiLtGrR9TWcRJjfkciEQVfH3zKjylI`;
const FRT_PUB_BASE_URL = "http://apis.fretron.com";

async function getShipmentByFilter() {
  let filter = {
    shipmentDate: {
      isTillExpression: false,
      isFromExpression: false,
      from: 1688277120000,
      till: 1690177979000
    },
    __version: 2
  };

  const url = `${FRT_PUB_BASE_URL}/shipment-view/shipments/v1?filters=${encodeURIComponent(
    JSON.stringify(filter)
  )}&size=1000&allFields=["consignments","branch","shipmentNumber","shipmentStatus","fleetInfo"]`;

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
    return null;
  }
}

async function getVendorBill(branchName) {
  try {
    let filter = { "billingBranchName": [branchName] };
    let url = `${FRT_PUB_BASE_URL}/shipment-view/vendor-bill/v1/vendor-bills?filters=${encodeURIComponent(
      JSON.stringify(filter)
    )}`;

    const options = {
      method: "GET",
      uri: url,
      json: true,
      headers: {
        Authorization: TOKEN,
      },
    };

    const res = await rp(options);
    // console.log(res);

    if (res && Array.isArray(res)) {
      return res;
    } else {
      console.log(`Error fetching vendor bill for branch '${branchName}': Invalid response`);
      return null;
    }
  } catch (e) {
    console.log(`Error fetching vendor bill for branch '${branchName}': ${e.message}`);
    return null;
  }
}

async function main() {
  try {
    let shs = await getShipmentByFilter();
    let result = [];
    let processedBranches = {}; 
  
    let vehiclePlacementCountByBranch = {};

    if (shs.length > 0) {
      for (let sh of shs) {
        if (sh.branch && sh.branch.name && !processedBranches[sh.branch.name]) {
          let branch = sh.branch.name;
          let json = {
            "Dispatch Location": branch,
            "Invoice Created": 0,
            "Invoices Approved": 0,
            "Pending Invoice": 0,
            "Manual Tracking Count": 0,
            "SIM Tracking Count": 0,
            "Shipment Delivered": 0,
            "POD submitted": 0,
            "Pending POD": 0,
            "Vehicle Placement Count": 0,
            "Delivered but Not Billed Invoice": 0,
          };
          processedBranches[branch] = true; 
  
          let vendorBills = await getVendorBill(branch);
          if (vendorBills && vendorBills.length > 0) {
            json["Invoice Created"] = vendorBills.length;
  
            let pendingCount = vendorBills.filter((bill) => bill.billingStatus === "PENDING").length;
            json["Pending Invoice"] = pendingCount;
  
            let approvedCount = vendorBills.filter((bill) => bill.billingStatus === "BILLED").length;
            json["Invoices Approved"] = approvedCount;
          }
  
          if (sh.fleetInfo && sh.fleetInfo.trackingMode === "MANUAL") {
            json["Manual Tracking Count"]++;
          }
  
          if (sh.fleetInfo && sh.fleetInfo.trackingMode === "VTS-LBS") {
            json["SIM Tracking Count"]++;
          }
  
          if (sh.shipmentStatus === "Completed") {
            json["Shipment Delivered"]++;
          }
  
          if (sh.consignments && sh.consignments.length > 0) {
            for (let consignment of sh.consignments) {
              if (consignment.pod && consignment.pod.status === "SUBMITTED") {
                json["POD submitted"]++;
              } else if (consignment.pod && consignment.pod.status === "PENDING") {
                json["Pending POD"]++;
              }
            }
          }
  
          if (!vehiclePlacementCountByBranch[branch]) {
            vehiclePlacementCountByBranch[branch] = 0;
          }

          
          json["Vehicle Placement Count"] = vehiclePlacementCountByBranch[branch]++;
  
          if (
            json["Shipment Delivered"] > 0 &&
            json["POD submitted"] > 0 &&
            json["Invoices Approved"] === 0
          ) {
            json["Delivered but Not Billed Invoice"] = json["Shipment Delivered"];
          }
  
          result.push(json);
        }
      }
    } else {
      console.log("No shipment found or Error in getting shipment");
    }
  
    console.log(result);
  } catch (error) {
    console.log(`Caught Error in main function: ${error.message}`);
  }
}

main();
