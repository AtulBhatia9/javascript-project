const TOKEN = ""

function main() {
  const sheet = SpreadsheetApp.getActive().getSheetByName("Sheet1");
  const lastRow = sheet.getLastRow();
  const startRow = 2;
  const vehicleNumberRange = sheet.getRange("A" + startRow + ":A" + lastRow);
  const originRange = sheet.getRange("B" + startRow + ":B" + lastRow);
  const destinationRange = sheet.getRange("C" + startRow + ":C" + lastRow);

  const vehicleNumbers = vehicleNumberRange.getValues();
  const origins = originRange.getValues();
  const destinations = destinationRange.getValues();

  let originPlace = await getPlaceByName(origin)
  let destinationPlace = await getPlaceByName(destination)


  for (let i = 0; i < vehicleNumbers.length; i++) {
    const vehicleNumber = vehicleNumbers[i][0] ?? "";
    let shipmentStages = []
    let originStage = {
      "hub": null,
      "stageName": null,
      "consignmentPickUps": null,
      "tripPoint": {
        "purpose": "Pickup"
      },
      "place": originPlace,
    }
    let destinationStage = {
      "hub": null,
      "stageName": null,
      "consignmentPickUps": null,
      "tripPoint": {
        "purpose": "Delivery"
      },
      "place": destinationPlace,
    }

    shipmentStages.push(originStage)
    shipmentStages.push(destinationStage)

    const origin = origins[i][0] ?? "";
    const destination = destinations[i][0] ?? "";

    if (vehicleNumber && origin && destination) {
      const shipmentPayload = {
        shipment: {
          shipmentNumber: null,
          consignments: [],
          shipmentDate: Date.now(),
          shipmentStages: shipmentStages,
          fleetInfo: {
            device: null,
            lbsNumber: null,
            trackingMode: "MANUAL",
            vehicle: {
              vtsDeviceId: null,
              kmDriven: null,
              attachedDocs: [],
              customFields: [],
              floorType: null,
              source: "FRETRON",
              isTrackingEnabled: false,
              updates: null,
              branch: null,
              uuid: null,
              orgId: null,
              vehicleLoadType: null,
              associatedWith: null,
              isDeleted: null,
              customerId: null,
              vehicleModel: null,
              mileageEmpty: null,
              mileageLoaded: null,
              vehicleType: null,
              groups: [],
              externalId: null,
              updateTime: null,
              sharedWith: [],
              vehicleMake: null,
              vehicleRegistrationNumber: vehicleNumber,
              chassisNumber: null,
              driverId: null,
              createTime: null,
              loadCapacity: null,
              truckLength: null,
              category: null,
              groupsExtended: null,
            },
            driver: null,
            fleetOwner: null,
            fleetType: "Owned",
            forwardingAgent: {
              "address": "{\"address\":\",rajan store,Undefined Minor Road,Karunagappally,Kollam,Kerala,690574,India,in\",\"city\":null,\"state\":null,\"pincode\":null}",
              "customFields": [{
                "fieldKey": "bidRemainingV2",
                "value": "1"
              }, {
                "fieldKey": "bidSubmittedV2",
                "value": "0"
              }, {
                "fieldKey": "minRemainingTimeV2",
                "value": "1674028840977"
              }, {
                "fieldKey": "totalAuctionsV2",
                "value": "1"
              }, {
                "fieldKey": "criticalOrderV2",
                "value": "0"
              }, {
                "fieldKey": "live-auctions",
                "value": "0"
              }, {
                "fieldKey": "live-bids-pending",
                "value": "0"
              }],
              "isPortalEnabled": false,
              "externalId": null,
              "panNumber": "CCBPJ7538R",
              "type": "vendor",
              "uuid": "928a78b7-6063-4b2f-81fe-2dd315540247",
              "parentId": null,
              "places": [{
                "center": {
                  "latitude": 9.0992543,
                  "longitude": 76.5996321
                },
                "centerCoordinates": [76.5996321, 9.0992543],
                "placeId": "N7081788413",
                "name": "rajan store",
                "externalId": null,
                "category": null
              }],
              "gstn": "123456789009876",
              "name": "karan mishra ",
              "contacts": [{
                "emails": [""],
                "address": null,
                "mobileNumbers": [],
                "mobileNumber": null,
                "name": "karan mishra ",
                "type": null
              }],
              "group": {
                "name": "lorryOwner"
              },
              "status": "ACTIVE"
            },
          },
          edd: null,
          shipmentStatus: "Planned",
          transportationMode: "ByRoad",
          shipmentType: "DirectLeg",
          customFields: [],
          uuid: null,
          branch: null,
        },
        consignments: [],
      };

      createShipment(shipmentPayload);
    }
  }
}

async function getPlaceByName(name) {
    const url = `https://apis.fretron.com/shipment-view/places/page/places?search=${name}`;

    try {
        const res = await rp({
            method: "GET",
            uri: url,
            headers: {
                Authorization: TOKEN,
            },
            json: true,
        });
        // console.log(`getPlaceByName ${res}`);

        const foundPlace = res.find(place => place.name === name);
        if (foundPlace) {
            return foundPlace;
        } else {
            console.log(`No place found with name '${name}'`);
            return null;
        }
    } catch (error) {
        console.log(`Error retrieving place '${name}': ${error.message}`);
        return null;
    }

}

function createShipment(shipmentPayload) {
  try {
    const url = "https://apis.fretron.com/shipment/v1/shipment/with/consignments";
    const options = {
      muteHttpExceptions: true,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: TOKEN,
      },
      payload: JSON.stringify(shipmentPayload),
    };

    const response = UrlFetchApp.fetch(url, options);
    const data = JSON.parse(response.getContentText());

    console.log(`Shipment created with UUID: ${data.uuid}`);

    if (response.getResponseCode() === 200) {
      return data;
    } else {
      console.log(`Create Shipment API response error: ${data.error}`);
    }
  } catch (error) {
    console.log(`Caught Error in Create Shipment API: ${error.message}`);
    throw error;
  }
}
