const rp = require("request-promise");
const _ = require("lodash");
var shipmentDate = new Date(2023, 6, 7).valueOf();
const TOKEN = ""

const vehicleMaster = [
  {
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "fda6e3d7-96ef-4080-bc32-732e776c0545",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_9"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_65675764456465464"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65675764456465464",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_6"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_6"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_20"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "20",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_72"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_78"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_48"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "48",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_67"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_5"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "5",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_19"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "19",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_47"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_84"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "84",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "f993702a-900e-45f3-a784-237561bf27d1",
              "resourceId": "fda6e3d7-96ef-4080-bc32-732e776c0545",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "165741b0-54af-4c06-89b5-149334c7d8dc",
              "revision": null,
              "time": 1688642646563,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "fda6e3d7-96ef-4080-bc32-732e776c0545",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 9,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "34cccbe4-7029-45c7-a598-583dfa249667",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "3e7ed09d-f6b7-4bc7-8f10-35e1944e838a",
                  "revision": null,
                  "time": 1683539739973,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "34cccbe4-7029-45c7-a598-583dfa249667",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 6,
              "chassisType": "9ft",
              "includeMinHeight": false,
              "name": null,
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": null,
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642646563,
          "sharedWith": [],
          "baseLocationId": "f4576716-65c0-44c1-98b0-4e92af9f8ead",
          "vehicleMake": null,
          "vehicleRegistrationNumber": "UK08CB3004",
          "chassisNumber": "65675764456465464",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "f6a8816a-607f-45c1-a7da-e332672f9b13",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_28"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "28",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_74357572448376794"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "74357572448376794",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_16"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_16"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_26"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_28"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "28",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_38"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "38",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_78"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_20"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "20",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_2"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "2",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_47"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_83"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "83",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_45"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_1"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "1",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "2574826a-2696-4643-944c-3c257fe85a97",
              "resourceId": "f6a8816a-607f-45c1-a7da-e332672f9b13",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "5c6d17ef-a996-48a3-a5f3-c14a3e7949e2",
              "revision": null,
              "time": 1688642646844,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "f6a8816a-607f-45c1-a7da-e332672f9b13",
          "branch": null,
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 28,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "75919bb8-c1c9-450b-8d42-ff461db1dcd1",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "4fb14ad3-022d-4bec-89de-038d4f623f07",
                  "revision": null,
                  "time": 1683540015146,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "75919bb8-c1c9-450b-8d42-ff461db1dcd1",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 14,
              "chassisType": "28ft",
              "includeMinHeight": false,
              "name": "TATA_28MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "tata983274",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642646844,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_28ft",
          "vehicleRegistrationNumber": "UK08CA6475",
          "chassisNumber": "74357572448376794",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "e713feaf-8023-4116-918c-642a6bebaf19",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_28"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "28",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_46523764324832543"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "46523764324832543",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_16"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_16"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_22"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "22",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_88"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "88",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_23"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "23",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_21"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "21",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_79"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_4"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_78"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_40"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "40",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_42"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "42",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "7c484dae-5008-43c3-a822-f2e08b31969e",
              "resourceId": "e713feaf-8023-4116-918c-642a6bebaf19",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "3e3711e5-97c7-4e87-9d74-c6f875943c1e",
              "revision": null,
              "time": 1688642647156,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "e713feaf-8023-4116-918c-642a6bebaf19",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 28,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "75919bb8-c1c9-450b-8d42-ff461db1dcd1",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "4fb14ad3-022d-4bec-89de-038d4f623f07",
                  "revision": null,
                  "time": 1683540015146,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "75919bb8-c1c9-450b-8d42-ff461db1dcd1",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 14,
              "chassisType": "28ft",
              "includeMinHeight": false,
              "name": "TATA_28MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "tata983274",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642647156,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_28ft",
          "vehicleRegistrationNumber": "UK08CA9972",
          "chassisNumber": "46523764324832543",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "driver": {
          "name": "RAVI",
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Uttarakhand Gujrat Carriers",
          "externalId": null,
          "uuid": "344e5bce-ad3c-423a-b713-f0d2e7604070"
      },
      "verificationStatus": "UnVerified",
      "trackingMode": "MANUAL",
      "broker": {
          "name": "Uttarakhand Gujrat Carriers",
          "externalId": null,
          "uuid": "344e5bce-ad3c-423a-b713-f0d2e7604070"
      },
      "secondaryDriver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "uuid": "df970244-dc39-4e63-a78f-bb4d8736d5e6",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "Road Tax_10"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_17"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "17",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_37"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "37",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_13"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "13",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_17"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "17",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_95"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "95",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_10"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_52"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_50"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_68"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "68",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_43"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_15"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_31"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_31"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_49"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_72"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_36"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_41"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "41",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_18"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_16"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_51"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_49"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_50"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_79"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_12"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_93"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_4"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_4"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_67"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_52"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_68"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "68",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_57"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "57",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_36"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_12"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_35"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_50"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": null,
          "isTrackingEnabled": false,
          "updates": {
              "traceID": "e7d779ba-6a84-43d6-9959-82f3f7f64c6f",
              "resourceId": "df970244-dc39-4e63-a78f-bb4d8736d5e6",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "1d93764e-c81f-419f-8e68-b996647d1746",
              "revision": null,
              "time": 1688642647407,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "df970244-dc39-4e63-a78f-bb4d8736d5e6",
          "branch": null,
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": null,
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": null,
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "TATA_20MT",
          "groups": null,
          "externalId": null,
          "updateTime": 1688642647407,
          "sharedWith": null,
          "baseLocationId": null,
          "vehicleMake": null,
          "vehicleRegistrationNumber": "HR67D1624",
          "chassisNumber": "376138742747832647",
          "driverId": null,
          "createTime": null,
          "loadCapacity": 20,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "decac36b-9c6b-4f46-b846-9dc5c79c615d",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_9"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_76767264236493264"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "76767264236493264",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_6"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_6"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_6"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_11"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "11",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_26"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_37"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "37",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_89"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "89",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_99"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "99",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_83"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "83",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_65"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_15"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_64"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "64",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "5c6e8f58-2847-4d39-867d-a65fca087bbf",
              "resourceId": "decac36b-9c6b-4f46-b846-9dc5c79c615d",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "854ba306-cbc9-484c-ac10-9d1e58322033",
              "revision": null,
              "time": 1688642647543,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "decac36b-9c6b-4f46-b846-9dc5c79c615d",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 9,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "34cccbe4-7029-45c7-a598-583dfa249667",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "3e7ed09d-f6b7-4bc7-8f10-35e1944e838a",
                  "revision": null,
                  "time": 1683539739973,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "34cccbe4-7029-45c7-a598-583dfa249667",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 6,
              "chassisType": "9ft",
              "includeMinHeight": false,
              "name": "TATA_9MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "T3600",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642647543,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_9ft",
          "vehicleRegistrationNumber": "UK08CA6476",
          "chassisNumber": "76767264236493264",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "driver": {
          "name": "PANKAJ",
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Market",
      "fleetOwner": {
          "name": "Uttarakhand Gujrat Carriers",
          "externalId": null,
          "uuid": "344e5bce-ad3c-423a-b713-f0d2e7604070"
      },
      "verificationStatus": "UnVerified",
      "trackingMode": "MANUAL",
      "broker": {
          "name": "Uttarakhand Gujrat Carriers",
          "externalId": null,
          "uuid": "344e5bce-ad3c-423a-b713-f0d2e7604070"
      },
      "secondaryDriver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "uuid": "dbdf7793-9922-4309-b3ee-4ccf8d48b705",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "Road Tax_98"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_78"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_27"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "27",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_91"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "91",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_80"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_23"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "23",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_24"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_74"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "74",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_29"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "29",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_68"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "68",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_43"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_15"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_31"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_31"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_49"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_72"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_36"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_41"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "41",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_18"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_16"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_51"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_49"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_50"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_79"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_12"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_93"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_4"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_4"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_67"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_52"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_68"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "68",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_57"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "57",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_36"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_12"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_35"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_50"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_69"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_73"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_79"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_81"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "81",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_24"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_80"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_62"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "62",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_26"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_31"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_26"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_69"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_63"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "63",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_9"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_4"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_69"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_75"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_23"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "23",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_21"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "21",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": null,
          "isTrackingEnabled": false,
          "updates": {
              "traceID": "8a079d17-cd70-497b-88b6-129bcfb6820a",
              "resourceId": "dbdf7793-9922-4309-b3ee-4ccf8d48b705",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "e150d3e9-1e71-4f3b-b708-92391bc72990",
              "revision": null,
              "time": 1688642647756,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "dbdf7793-9922-4309-b3ee-4ccf8d48b705",
          "branch": null,
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 15,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "6523f702-4162-4d94-9fff-5060124c07ba",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "88c4b87c-5b05-4298-93a4-4380f0de5b2d",
                  "uuid": "4ada5360-702c-4a6b-8788-6ea45a5e7b75",
                  "revision": null,
                  "time": 1684753696951,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": null,
              "uuid": "6523f702-4162-4d94-9fff-5060124c07ba",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Contracted",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": null,
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": null,
              "numberOfWheels": 10,
              "chassisType": "15ft",
              "includeMinHeight": false,
              "name": "TATA_15MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": null,
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "TATA_15MT",
          "groups": null,
          "externalId": null,
          "updateTime": 1688642647756,
          "sharedWith": null,
          "baseLocationId": null,
          "vehicleMake": null,
          "vehicleRegistrationNumber": "HP 93 5143",
          "chassisNumber": "9756702696",
          "driverId": null,
          "createTime": null,
          "loadCapacity": 15,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "ca14bd3e-3885-4d43-89bc-c55c7ec39d39",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_24"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_87989789787897897"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "87989789787897897",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_12"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_12"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_21"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "21",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_80"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_22"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "22",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_24"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_50"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_83"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "83",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_8"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "8",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_3"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "3",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_85"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_37"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "37",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "c1b589cc-17e7-4e5b-8394-b0b83311811d",
              "resourceId": "ca14bd3e-3885-4d43-89bc-c55c7ec39d39",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "73b14a31-7e88-49a7-9438-d23316d215d1",
              "revision": null,
              "time": 1688642648204,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "ca14bd3e-3885-4d43-89bc-c55c7ec39d39",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 24,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "faaec633-d26a-4cf2-8f28-0e50b458a71f",
                  "revision": null,
                  "time": 1683539898621,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 12,
              "chassisType": "24ft",
              "includeMinHeight": false,
              "name": "TATA_24MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "HBAHBDKBD",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642648204,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_24ft",
          "vehicleRegistrationNumber": "UK08CA9605",
          "chassisNumber": "87989789787897897",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "c8b23633-cd9c-4fdd-92cc-fa2a21eaea2f",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_24"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_74386587436587435"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "74386587436587435",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_12"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_12"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_21"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "21",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_73"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_76"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "76",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_47"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_64"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "64",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_33"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "33",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_15"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_85"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_39"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "39",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_82"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "82",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "12353ae5-2457-43e3-bffa-a29143c54ed7",
              "resourceId": "c8b23633-cd9c-4fdd-92cc-fa2a21eaea2f",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "68a696f3-d654-4d4d-a7c9-18bc26127b58",
              "revision": null,
              "time": 1688642648677,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "c8b23633-cd9c-4fdd-92cc-fa2a21eaea2f",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 24,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "faaec633-d26a-4cf2-8f28-0e50b458a71f",
                  "revision": null,
                  "time": 1683539898621,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 12,
              "chassisType": "24ft",
              "includeMinHeight": false,
              "name": "TATA_24MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "HBAHBDKBD",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642648677,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_24ft",
          "vehicleRegistrationNumber": "UK07CB9581",
          "chassisNumber": "74386587436587435",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "c27c274f-56e2-4dd5-b108-02bc2596ed3a",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_28"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "28",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_65575675765576576"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65575675765576576",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_16"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_16"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_25"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "25",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_15"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_24"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_71"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "71",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_51"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_49"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_38"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "38",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_49"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_73"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_21"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "21",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "72cc576d-247c-4825-98cc-f4e2c888ca53",
              "resourceId": "c27c274f-56e2-4dd5-b108-02bc2596ed3a",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "45a26eca-5dc2-495a-8cf3-622159dcd7c1",
              "revision": null,
              "time": 1688642648791,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "c27c274f-56e2-4dd5-b108-02bc2596ed3a",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 28,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "75919bb8-c1c9-450b-8d42-ff461db1dcd1",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "4fb14ad3-022d-4bec-89de-038d4f623f07",
                  "revision": null,
                  "time": 1683540015146,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "75919bb8-c1c9-450b-8d42-ff461db1dcd1",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 14,
              "chassisType": "28ft",
              "includeMinHeight": false,
              "name": "TATA_28MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "tata983274",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642648791,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_28ft",
          "vehicleRegistrationNumber": "UK08CA9973",
          "chassisNumber": "65575675765576576",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "b52f418b-7165-4926-93fd-42142bcb576a",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_24"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_78964545646545646"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78964545646545646",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_12"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_12"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_21"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "21",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_36"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_12"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_34"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_93"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_20"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "20",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_75"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_80"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_63"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "63",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_92"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "92",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "b5ec507b-a74d-4b97-becc-8ef6a7554cd9",
              "resourceId": "b52f418b-7165-4926-93fd-42142bcb576a",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "10baf169-2f37-4f71-bc03-5a7269e9d0a1",
              "revision": null,
              "time": 1688642648910,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "b52f418b-7165-4926-93fd-42142bcb576a",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 24,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "faaec633-d26a-4cf2-8f28-0e50b458a71f",
                  "revision": null,
                  "time": 1683539898621,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 12,
              "chassisType": "24ft",
              "includeMinHeight": false,
              "name": "TATA_24MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "HBAHBDKBD",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642648910,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_24ft",
          "vehicleRegistrationNumber": "UK08CA9604",
          "chassisNumber": "78964545646545646",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "aeabd8f5-14f3-4760-931d-da69dc9d137e",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_28"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "28",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_89563489563456436"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "89563489563456436",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_16"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_16"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_25"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "25",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_8"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "8",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_18"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_29"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "29",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_35"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_96"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_93"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_20"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "20",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_56"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "56",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_99"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "99",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "0bd030cb-8ed5-40f3-abbd-5f0b15993427",
              "resourceId": "aeabd8f5-14f3-4760-931d-da69dc9d137e",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "97ef99cc-c8a4-4bb9-880e-7449858151d2",
              "revision": null,
              "time": 1688642648989,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "aeabd8f5-14f3-4760-931d-da69dc9d137e",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 28,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "75919bb8-c1c9-450b-8d42-ff461db1dcd1",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "4fb14ad3-022d-4bec-89de-038d4f623f07",
                  "revision": null,
                  "time": 1683540015146,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "75919bb8-c1c9-450b-8d42-ff461db1dcd1",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 14,
              "chassisType": "28ft",
              "includeMinHeight": false,
              "name": "TATA_28MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "tata983274",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642648989,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_28ft",
          "vehicleRegistrationNumber": "UK08CB0522",
          "chassisNumber": "89563489563456436",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "ac64c140-b752-4925-94fe-86919ca6c79b",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [
              "7f535a47-4958-408a-825e-fb7ccb5d47c0",
              "4fe79159-9ce6-46ee-9e78-d7f0edae5b74",
              "46534fac-4c0f-4148-b7cc-d66dfe302cf6",
              "20077ba6-ea8f-423c-9aed-92829b33106e",
              "17c32372-96c9-4a00-adc4-43af7d784601"
          ],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_28"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "28",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_MB1NACFD7HPEY3984"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "MB1NACFD7HPEY3984",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_16"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_16"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_26"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_90"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "90",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_70"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_35"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_90"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "90",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_31"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_88"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "88",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_37"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "37",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_19"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "19",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_47"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "74eb71e1-f222-4991-afb1-9a1ecdd2179d",
              "resourceId": "ac64c140-b752-4925-94fe-86919ca6c79b",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "9a585bfd-0d4b-4602-8c0d-659203981e1d",
              "revision": null,
              "time": 1688642649086,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "ac64c140-b752-4925-94fe-86919ca6c79b",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 28,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "75919bb8-c1c9-450b-8d42-ff461db1dcd1",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "4fb14ad3-022d-4bec-89de-038d4f623f07",
                  "revision": null,
                  "time": 1683540015146,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "75919bb8-c1c9-450b-8d42-ff461db1dcd1",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 14,
              "chassisType": "28ft",
              "includeMinHeight": false,
              "name": "TATA_28MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "tata983274",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642649086,
          "sharedWith": [],
          "baseLocationId": "f4576716-65c0-44c1-98b0-4e92af9f8ead",
          "vehicleMake": "TATA_28ft",
          "vehicleRegistrationNumber": "UK08CA7295",
          "chassisNumber": "MB1NACFD7HPEY3984",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "a3470f8a-ad91-4f05-92aa-c51f91388fe9",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_28"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "28",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_32845837264873264"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "32845837264873264",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_16"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_16"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_25"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "25",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_91"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "91",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_85"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_98"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_28"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "28",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_60"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "60",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_58"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "58",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_89"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "89",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_35"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_64"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "64",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "bc51176e-27b2-40af-949c-f92818b07013",
              "resourceId": "a3470f8a-ad91-4f05-92aa-c51f91388fe9",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "4f46f5f8-6e44-4a15-b0e0-38bf99a5825c",
              "revision": null,
              "time": 1688642649167,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "a3470f8a-ad91-4f05-92aa-c51f91388fe9",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 28,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "75919bb8-c1c9-450b-8d42-ff461db1dcd1",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "4fb14ad3-022d-4bec-89de-038d4f623f07",
                  "revision": null,
                  "time": 1683540015146,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "75919bb8-c1c9-450b-8d42-ff461db1dcd1",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 14,
              "chassisType": "28ft",
              "includeMinHeight": false,
              "name": "TATA_28MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "tata983274",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642649167,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_28ft",
          "vehicleRegistrationNumber": "UK08CB0523",
          "chassisNumber": "32845837264873264",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "9c60d815-ebf3-410f-9e00-ffd2a3f714ce",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_9"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_98653765748365478"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98653765748365478",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_4"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_4"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_7"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_98"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_30"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "30",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_79"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_91"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "91",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_78"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_6"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_8"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "8",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_4"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_64"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "64",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "91eb5ecc-ce8c-4511-acdd-91cdcc6328fa",
              "resourceId": "9c60d815-ebf3-410f-9e00-ffd2a3f714ce",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "7c2c911a-8ef3-4249-8582-007113aef2ab",
              "revision": null,
              "time": 1688642649354,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "9c60d815-ebf3-410f-9e00-ffd2a3f714ce",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 9,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "34cccbe4-7029-45c7-a598-583dfa249667",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "3e7ed09d-f6b7-4bc7-8f10-35e1944e838a",
                  "revision": null,
                  "time": 1683539739973,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "34cccbe4-7029-45c7-a598-583dfa249667",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 6,
              "chassisType": "9ft",
              "includeMinHeight": false,
              "name": "TATA_9MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "T3600",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642649354,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_9ft",
          "vehicleRegistrationNumber": "UK08CB3006",
          "chassisNumber": "98653765748365478",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "driver": {
          "name": "CHARANJEET",
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Market",
      "fleetOwner": {
          "name": "Uttarakhand Gujrat Carriers",
          "externalId": null,
          "uuid": "344e5bce-ad3c-423a-b713-f0d2e7604070"
      },
      "verificationStatus": "UnVerified",
      "trackingMode": "MANUAL",
      "broker": {
          "name": "Uttarakhand Gujrat Carriers",
          "externalId": null,
          "uuid": "344e5bce-ad3c-423a-b713-f0d2e7604070"
      },
      "secondaryDriver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "uuid": "8b0a6db7-57b5-4cc7-a34b-1593298a296b",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "Road Tax_92"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "92",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_17"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "17",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_59"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "59",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_86"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "86",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_96"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_58"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "58",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_85"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_81"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "81",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_28"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "28",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_68"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "68",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_43"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_15"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_31"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_31"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_49"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_72"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_36"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_41"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "41",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_18"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_16"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_51"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_49"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_50"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_79"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_12"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_93"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_4"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_4"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_67"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_52"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_68"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "68",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_57"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "57",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_36"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_12"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_35"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_50"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_69"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_73"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_79"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_81"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "81",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_24"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_80"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_62"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "62",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_26"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_31"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_26"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_69"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_63"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "63",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_9"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_4"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_69"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_75"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_23"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "23",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_21"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "21",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_65"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_8"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "8",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_24"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_52"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_90"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "90",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_75"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_64"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "64",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_40"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "40",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_12"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_76"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "76",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_78"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_74"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "74",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_24"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_85"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_79"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_96"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_70"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_90"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "90",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_66"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_34"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_89"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "89",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_57"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "57",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_70"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_17"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "17",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_13"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "13",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_38"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "38",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_85"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_34"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_45"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_93"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_12"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_83"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "83",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_10"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_22"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "22",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_96"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_27"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "27",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_75"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_5"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "5",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_10"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_50"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_61"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "61",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_58"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "58",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_58"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "58",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_15"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_16"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_71"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "71",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_78"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_35"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_1"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "1",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_23"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "23",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_18"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_46"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "46",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_26"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_35"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_16"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_19"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "19",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_47"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_31"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_90"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "90",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_3"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "3",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_47"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_66"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_91"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "91",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_34"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_94"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "94",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_53"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "53",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_18"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_32"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "32",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_24"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_79"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_75"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_55"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "55",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_81"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "81",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_98"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_70"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_10"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_96"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_2"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "2",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_36"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_45"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_66"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": null,
          "isTrackingEnabled": false,
          "updates": {
              "traceID": "03438cec-ca2e-40ee-94b0-e0d63c4b3029",
              "resourceId": "8b0a6db7-57b5-4cc7-a34b-1593298a296b",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "c6d117d7-f594-4930-89d9-08add6d52e86",
              "revision": null,
              "time": 1688642649698,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "8b0a6db7-57b5-4cc7-a34b-1593298a296b",
          "branch": null,
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 9,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "34cccbe4-7029-45c7-a598-583dfa249667",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "3e7ed09d-f6b7-4bc7-8f10-35e1944e838a",
                  "revision": null,
                  "time": 1683539739973,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": null,
              "uuid": "34cccbe4-7029-45c7-a598-583dfa249667",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": null,
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": null,
              "numberOfWheels": 6,
              "chassisType": "9ft",
              "includeMinHeight": false,
              "name": "TATA_9MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": null,
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "TATA_9MT",
          "groups": null,
          "externalId": null,
          "updateTime": 1688642649698,
          "sharedWith": null,
          "baseLocationId": null,
          "vehicleMake": null,
          "vehicleRegistrationNumber": "PB32L8866",
          "chassisNumber": "123456654784566654",
          "driverId": null,
          "createTime": null,
          "loadCapacity": 9,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "8a308c2e-b0a7-4327-94f1-30bd460b8a8b",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_12"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_98934732492374932"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98934732492374932",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_6"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_6"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_9"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_69"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_70"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_93"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_70"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_40"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "40",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_83"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "83",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_7"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_93"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_72"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "d1b589d8-8c40-43cd-b219-38c55e1f1026",
              "resourceId": "8a308c2e-b0a7-4327-94f1-30bd460b8a8b",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "b139ba9b-eac1-4f22-88f0-7986bcd95826",
              "revision": null,
              "time": 1688642649811,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "8a308c2e-b0a7-4327-94f1-30bd460b8a8b",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 12,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "c60e06da-d5a6-48f9-8f51-6a7c26ed381a",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "1112c954-6e9c-497e-98c0-6ff688c1ba61",
                  "revision": null,
                  "time": 1683539779409,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "c60e06da-d5a6-48f9-8f51-6a7c26ed381a",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 6,
              "chassisType": "12ft",
              "includeMinHeight": false,
              "name": "TATA_12MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "BH2342",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642649811,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_12ft",
          "vehicleRegistrationNumber": "UK08CA2145",
          "chassisNumber": "98934732492374932",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "88a34fb1-21dd-41f8-bcde-6b371dcaa4ee",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_24"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_43784362984972438"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43784362984972438",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_16"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_16"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_21"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "21",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_37"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "37",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_31"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_20"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "20",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_58"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "58",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_12"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_60"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "60",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_53"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "53",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_42"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "42",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_69"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "f0c5770c-300f-4313-bcc7-666fd7ba69f9",
              "resourceId": "88a34fb1-21dd-41f8-bcde-6b371dcaa4ee",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "2ede374e-1662-4ec5-a570-58c35a21d781",
              "revision": null,
              "time": 1688642650006,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "88a34fb1-21dd-41f8-bcde-6b371dcaa4ee",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 24,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "faaec633-d26a-4cf2-8f28-0e50b458a71f",
                  "revision": null,
                  "time": 1683539898621,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 12,
              "chassisType": "24ft",
              "includeMinHeight": false,
              "name": "TATA_24MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "HBAHBDKBD",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642650006,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_24ft",
          "vehicleRegistrationNumber": "UK08CA6010",
          "chassisNumber": "43784362984972438",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "86d03137-7998-4589-bb00-07ae261a414a",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_25"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "25",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_93845643654938564"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93845643654938564",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_10"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_10"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_22"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "22",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_43"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_31"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_52"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_83"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "83",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_72"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_63"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "63",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_52"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_13"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "13",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_5"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "5",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "de27e5dd-5f58-49a4-994c-4b8be57f074a",
              "resourceId": "86d03137-7998-4589-bb00-07ae261a414a",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "df07ef8b-87c6-4cb9-8dea-0b838c42c092",
              "revision": null,
              "time": 1688642650222,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "86d03137-7998-4589-bb00-07ae261a414a",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Closed",
              "passingCapacityMT": 25,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "668dc517-5b77-4746-ba2d-8e0cd986d1ef",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "bd9e7e7b-fc72-4aaa-8b3d-252bc8ff21c8",
                  "revision": null,
                  "time": 1684131315478,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "668dc517-5b77-4746-ba2d-8e0cd986d1ef",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 16,
              "chassisType": "25ft",
              "includeMinHeight": false,
              "name": "TATA_25MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "TAT9831274",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642650222,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_25ft",
          "vehicleRegistrationNumber": "UK08CA5506",
          "chassisNumber": "93845643654938564",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "7dd31514-2abf-4d83-bddb-186159965600",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_9"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_89345798345943593"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "89345798345943593",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_6"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_6"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_89"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "89",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_15"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_13"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "13",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_74"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "74",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_12"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_83"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "83",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_12"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_30"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "30",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_99"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "99",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "8a35ed9a-ff5e-4fa9-98f4-8bdee01c390c",
              "resourceId": "7dd31514-2abf-4d83-bddb-186159965600",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "0dc3ed5b-df2c-4678-9af3-ceb42988c03b",
              "revision": null,
              "time": 1688642650817,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "7dd31514-2abf-4d83-bddb-186159965600",
          "branch": null,
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 9,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "34cccbe4-7029-45c7-a598-583dfa249667",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "3e7ed09d-f6b7-4bc7-8f10-35e1944e838a",
                  "revision": null,
                  "time": 1683539739973,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "34cccbe4-7029-45c7-a598-583dfa249667",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 6,
              "chassisType": "9ft",
              "includeMinHeight": false,
              "name": "TATA_9MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "T3600",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642650817,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_9ft",
          "vehicleRegistrationNumber": "UK08CA0601",
          "chassisNumber": "89345798345943593",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "7c32994f-81fb-4d9d-950f-43e7a5db1cf2",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_28"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "28",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_34098759845794759"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34098759845794759",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_12"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_12"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_25"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "25",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_57"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "57",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_38"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "38",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_39"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "39",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_65"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_71"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "71",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_46"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "46",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_36"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_72"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_64"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "64",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "b93ab92d-696d-4d16-9257-fe115940ce34",
              "resourceId": "7c32994f-81fb-4d9d-950f-43e7a5db1cf2",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "f5f1ae46-81c1-45d9-9453-4a98aa602608",
              "revision": null,
              "time": 1688642650988,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "7c32994f-81fb-4d9d-950f-43e7a5db1cf2",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 28,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "75919bb8-c1c9-450b-8d42-ff461db1dcd1",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "4fb14ad3-022d-4bec-89de-038d4f623f07",
                  "revision": null,
                  "time": 1683540015146,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "75919bb8-c1c9-450b-8d42-ff461db1dcd1",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 14,
              "chassisType": "28ft",
              "includeMinHeight": false,
              "name": "TATA_28MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "tata983274",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642650988,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_28ft",
          "vehicleRegistrationNumber": "UK08CB1028",
          "chassisNumber": "34098759845794759",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "7c0af3f9-b346-408f-80d5-16cd0ad00a8e",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_24"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_87345679436574365"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "87345679436574365",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_12"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_12"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_21"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "21",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_87"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "87",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_46"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "46",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_52"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_2"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "2",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_47"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_24"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_29"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "29",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_69"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_16"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "9f641924-e906-441f-b12a-5d0da1a33483",
              "resourceId": "7c0af3f9-b346-408f-80d5-16cd0ad00a8e",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "08126298-097b-422c-bacf-1dfb71ac3d20",
              "revision": null,
              "time": 1688642651083,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "7c0af3f9-b346-408f-80d5-16cd0ad00a8e",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 24,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "faaec633-d26a-4cf2-8f28-0e50b458a71f",
                  "revision": null,
                  "time": 1683539898621,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 12,
              "chassisType": "24ft",
              "includeMinHeight": false,
              "name": "TATA_24MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "HBAHBDKBD",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642651083,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_24ft",
          "vehicleRegistrationNumber": "UK07CB9580",
          "chassisNumber": "87345679436574365",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "driver": {
          "name": "ASHOK",
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Market",
      "fleetOwner": {
          "name": "COLDSTAR LOGISTICS",
          "externalId": null,
          "uuid": "9d9e824d-e2e6-41a0-b766-d10538844ad2"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "broker": {
          "name": "COLDSTAR LOGISTICS",
          "externalId": null,
          "uuid": "9d9e824d-e2e6-41a0-b766-d10538844ad2"
      },
      "secondaryDriver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "uuid": "7abf043c-988d-462d-a214-d6f8e9e26a8c",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "Road Tax_29"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "29",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_2"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "2",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_62"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "62",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_83"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "83",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_73"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_5"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "5",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_40"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "40",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_43"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_57"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "57",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_68"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "68",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_43"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_15"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_31"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_31"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_49"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_72"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_36"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_41"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "41",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_18"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_16"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_51"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_49"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_50"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_79"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_12"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_93"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_4"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_4"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_67"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_52"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_68"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "68",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_57"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "57",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_36"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_12"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_35"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_50"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_69"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_73"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_79"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_81"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "81",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_24"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_80"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_62"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "62",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_26"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_31"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_26"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_69"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_63"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "63",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_9"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_4"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_69"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_75"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_23"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "23",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_21"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "21",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_65"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_8"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "8",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_24"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_52"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_90"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "90",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_75"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_64"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "64",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_40"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "40",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_12"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_76"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "76",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_78"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_74"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "74",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_24"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_85"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_79"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_96"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_70"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_90"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "90",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_66"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_34"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_89"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "89",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_57"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "57",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_70"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_17"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "17",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_13"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "13",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_38"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "38",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_85"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_34"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_45"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_93"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_12"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_83"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "83",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_10"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_22"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "22",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_96"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_27"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "27",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_75"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_5"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "5",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_10"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_50"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_61"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "61",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_58"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "58",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_58"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "58",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_15"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_16"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_71"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "71",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_78"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_35"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_1"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "1",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_23"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "23",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_18"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_46"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "46",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_26"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_35"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_16"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_19"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "19",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_47"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_31"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_90"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "90",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_3"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "3",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_47"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_66"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_91"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "91",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_34"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_94"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "94",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_53"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "53",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_18"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_32"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "32",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_24"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_79"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_75"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_55"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "55",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_81"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "81",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_98"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_70"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_10"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_96"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_2"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "2",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_36"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_45"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_66"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_69"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_2"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "2",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_82"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "82",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_56"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "56",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_94"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "94",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_73"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_53"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "53",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_39"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "39",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_53"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "53",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_52"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_42"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "42",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_72"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_60"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "60",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_20"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "20",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_66"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_47"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_71"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "71",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_48"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "48",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_96"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_82"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "82",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_7"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_75"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_16"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_7"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_80"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_43"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_52"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_26"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_69"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_80"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_61"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "61",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_72"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_55"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "55",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_71"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "71",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_47"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_49"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_45"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_51"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_95"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "95",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_26"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_51"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_31"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_93"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_87"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "87",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_80"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_33"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "33",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_32"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "32",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_43"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_92"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "92",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_98"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_4"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_65"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_59"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "59",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_45"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_84"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "84",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_24"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_73"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_36"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_89"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "89",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_88"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "88",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_51"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_98"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_14"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "14",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": null,
          "isTrackingEnabled": false,
          "updates": {
              "traceID": "62b9cc20-c538-4e72-afc0-ea5d3be5a155",
              "resourceId": "7abf043c-988d-462d-a214-d6f8e9e26a8c",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "b64f43ee-bb43-4a08-bce1-9ec53659e219",
              "revision": null,
              "time": 1688642651160,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "7abf043c-988d-462d-a214-d6f8e9e26a8c",
          "branch": null,
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 12,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "c60e06da-d5a6-48f9-8f51-6a7c26ed381a",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "1112c954-6e9c-497e-98c0-6ff688c1ba61",
                  "revision": null,
                  "time": 1683539779409,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": null,
              "uuid": "c60e06da-d5a6-48f9-8f51-6a7c26ed381a",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": null,
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": null,
              "numberOfWheels": 6,
              "chassisType": "12ft",
              "includeMinHeight": false,
              "name": "TATA_12MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": null,
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "TATA_12MT",
          "groups": null,
          "externalId": null,
          "updateTime": 1688642651160,
          "sharedWith": null,
          "baseLocationId": null,
          "vehicleMake": null,
          "vehicleRegistrationNumber": "HR55Y0330",
          "chassisNumber": "123456987456444456",
          "driverId": null,
          "createTime": null,
          "loadCapacity": 12,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "79621fcd-6f1e-427a-917b-1b4c9405da12",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [
              "54c27106-aa2b-46d9-90a6-01032d4ed045",
              "893d8d99-484b-4c81-8526-e7795ea410e9",
              "9012813a-e9b1-4cf8-b373-a1effaffae38",
              "7cd926eb-a122-4001-9a17-b29451be8e83",
              "3e307a40-f0b6-4670-90cf-400315649e7f"
          ],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_9"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_MAT457056F7F10154"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "MAT457056F7F10154",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_6"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_6"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_7"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_42"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "42",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_89"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "89",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_53"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "53",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_3"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "3",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_0"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "0",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_27"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "27",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_20"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "20",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_38"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "38",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_27"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "27",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "59bc2cca-0830-4ce2-b24f-1a5b42e74f43",
              "resourceId": "79621fcd-6f1e-427a-917b-1b4c9405da12",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "fd4524d6-b82f-4d46-bcc5-5820dd5be655",
              "revision": null,
              "time": 1688642651410,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "79621fcd-6f1e-427a-917b-1b4c9405da12",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 9,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "34cccbe4-7029-45c7-a598-583dfa249667",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "3e7ed09d-f6b7-4bc7-8f10-35e1944e838a",
                  "revision": null,
                  "time": 1683539739973,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "34cccbe4-7029-45c7-a598-583dfa249667",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 6,
              "chassisType": "9ft",
              "includeMinHeight": false,
              "name": "TATA_9MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "T3600",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642651410,
          "sharedWith": [],
          "baseLocationId": "f4576716-65c0-44c1-98b0-4e92af9f8ead",
          "vehicleMake": "TATA_9ft",
          "vehicleRegistrationNumber": "UK08CA5984",
          "chassisNumber": "MAT457056F7F10154",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "78a9563d-f38e-4f2c-8db4-703e4d4b1f7e",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [
              "57df9334-3439-439d-b59d-9c277cfc0e90"
          ],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_20"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "20",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_18"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_445051JSZA0222767"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "445051JSZA0222767",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_16"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_16"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_91"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "91",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_68"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "68",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_10"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_12"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_13"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "13",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_90"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "90",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_70"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_88"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "88",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_37"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "37",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "33f13e96-a917-46e6-a9ab-17fa7a169eb5",
              "resourceId": "78a9563d-f38e-4f2c-8db4-703e4d4b1f7e",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "38ace2a8-0cc8-4d3a-951b-2f74794fe8ae",
              "revision": null,
              "time": 1688642651720,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "78a9563d-f38e-4f2c-8db4-703e4d4b1f7e",
          "branch": null,
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 20,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "6f04487d-67bf-464b-ac0a-be706040250a",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "79440e9b-4828-47cd-be5b-dc05461d2fe6",
                  "revision": null,
                  "time": 1683614730284,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "6f04487d-67bf-464b-ac0a-be706040250a",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 16,
              "chassisType": "20ft",
              "includeMinHeight": false,
              "name": "TATA_20MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "347567843658",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642651720,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_20ft",
          "vehicleRegistrationNumber": "UK08CA50",
          "chassisNumber": "445051JSZA0222767",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": "TATA_20MT",
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "verificationStatus": "Verified",
      "trackingMode": "VTS-LBS",
      "broker": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "secondaryDriver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "uuid": "7477722e-9634-4c03-b3ff-b41590686466",
      "device": {
          "branchId": null,
          "isSuspended": null,
          "mobileNumber": null,
          "manufacturerName": null,
          "groups": null,
          "attachedResourceNumber": null,
          "externalId": null,
          "updateTime": null,
          "isAssociated": null,
          "sharedWith": null,
          "type": "lbs",
          "updates": null,
          "uuid": null,
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "attachedResourceId": null,
          "isDeleted": null,
          "createTime": null,
          "serviceProvider": null,
          "imei": "7417552088",
          "usedBy": null,
          "status": null
      },
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": "7417552088",
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_9"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_89765467865467865"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "89765467865467865",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_6"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_6"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_7"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_44"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "44",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_85"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_1"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "1",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_78"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_16"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_0"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "0",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_92"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "92",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_35"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_54"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "54",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "6c9c3cd8-f61f-4647-bec9-31b9c6922dd8",
              "resourceId": "7477722e-9634-4c03-b3ff-b41590686466",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "2db5aab1-067a-4f76-95b5-644baf274933",
              "revision": null,
              "time": 1688642651836,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "7477722e-9634-4c03-b3ff-b41590686466",
          "branch": null,
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 9,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "34cccbe4-7029-45c7-a598-583dfa249667",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "3e7ed09d-f6b7-4bc7-8f10-35e1944e838a",
                  "revision": null,
                  "time": 1683539739973,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "34cccbe4-7029-45c7-a598-583dfa249667",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 6,
              "chassisType": "9ft",
              "includeMinHeight": false,
              "name": "TATA_9MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "T3600",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642651836,
          "sharedWith": [
              "FRETRON_GOD_FO"
          ],
          "baseLocationId": null,
          "vehicleMake": "TATA_9ft",
          "vehicleRegistrationNumber": "UK08CA7242",
          "chassisNumber": "89765467865467865",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "71528211-4307-49fb-a8ac-8e1b2751213f",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_28"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "28",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_39463264832742374"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "39463264832742374",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_16"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_16"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_25"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "25",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_94"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "94",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_28"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "28",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_79"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_94"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "94",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_92"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "92",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_25"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "25",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_33"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "33",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_60"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "60",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "a2f230de-a59f-42e8-838b-531928dfabdf",
              "resourceId": "71528211-4307-49fb-a8ac-8e1b2751213f",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "d56f8579-b8a8-41ac-ae8f-02b1c9ef868b",
              "revision": null,
              "time": 1688642651933,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "71528211-4307-49fb-a8ac-8e1b2751213f",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 28,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "75919bb8-c1c9-450b-8d42-ff461db1dcd1",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "4fb14ad3-022d-4bec-89de-038d4f623f07",
                  "revision": null,
                  "time": 1683540015146,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "75919bb8-c1c9-450b-8d42-ff461db1dcd1",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 14,
              "chassisType": "28ft",
              "includeMinHeight": false,
              "name": "TATA_28MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "tata983274",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642651933,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_28ft",
          "vehicleRegistrationNumber": "UK08CB1029",
          "chassisNumber": "39463264832742374",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "6b4a8101-0ca7-4de0-a617-54d78ef6b328",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_9"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_23232323287346734"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "23232323287346734",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_6"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_6"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_6"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_71"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "71",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_82"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "82",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_32"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "32",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_5"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "5",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_63"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "63",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_46"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "46",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_52"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_68"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "68",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_50"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "999b8d16-00d9-46aa-ba4b-83c3b45f016d",
              "resourceId": "6b4a8101-0ca7-4de0-a617-54d78ef6b328",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "32140c66-a390-4c44-9df1-639f745834fb",
              "revision": null,
              "time": 1688642652041,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "6b4a8101-0ca7-4de0-a617-54d78ef6b328",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 9,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "34cccbe4-7029-45c7-a598-583dfa249667",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "3e7ed09d-f6b7-4bc7-8f10-35e1944e838a",
                  "revision": null,
                  "time": 1683539739973,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "34cccbe4-7029-45c7-a598-583dfa249667",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 6,
              "chassisType": "9ft",
              "includeMinHeight": false,
              "name": "TATA_9MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "T3600",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642652041,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_9ft",
          "vehicleRegistrationNumber": "UK08CB2324",
          "chassisNumber": "23232323287346734",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "driver": {
          "name": "ashok",
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "UnVerified",
      "trackingMode": "VTS-LBS",
      "broker": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "secondaryDriver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "uuid": "6b19ecb1-333f-4b81-9bef-1c3b4b7dceb3",
      "device": {
          "branchId": null,
          "isSuspended": null,
          "mobileNumber": null,
          "manufacturerName": null,
          "groups": null,
          "attachedResourceNumber": null,
          "externalId": null,
          "updateTime": null,
          "isAssociated": null,
          "sharedWith": null,
          "type": "lbs",
          "updates": null,
          "uuid": null,
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "attachedResourceId": null,
          "isDeleted": null,
          "createTime": null,
          "serviceProvider": null,
          "imei": "7417552088",
          "usedBy": null,
          "status": null
      },
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "Road Tax_0"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "0",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_62"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "62",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_45"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_49"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_7"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_87"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "87",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_2"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "2",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_49"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_35"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_68"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "68",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_43"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_15"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_31"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_31"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_49"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_72"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_36"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_41"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "41",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_18"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_16"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_51"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_49"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_50"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_79"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_12"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_93"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_4"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_4"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_67"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_52"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_68"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "68",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_57"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "57",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_36"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_12"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_35"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_50"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_69"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_73"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_79"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_81"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "81",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_24"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_80"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_62"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "62",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_26"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_31"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_26"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_69"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_63"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "63",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_9"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_4"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_69"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_75"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_23"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "23",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_21"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "21",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_65"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_8"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "8",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_24"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_52"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_90"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "90",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_75"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_64"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "64",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_40"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "40",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_12"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_76"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "76",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_78"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_74"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "74",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_24"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_85"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_79"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_96"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_70"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_90"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "90",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_66"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_34"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_89"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "89",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_57"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "57",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_70"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_17"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "17",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_13"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "13",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_38"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "38",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_85"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_34"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_45"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_93"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_12"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_83"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "83",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_10"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_22"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "22",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_96"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_27"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "27",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_75"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_5"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "5",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_10"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_50"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_61"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "61",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_58"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "58",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_58"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "58",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_15"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_16"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_71"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "71",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_78"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_35"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_1"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "1",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_23"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "23",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_18"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_46"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "46",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_26"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_35"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_16"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_19"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "19",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_47"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_31"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_90"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "90",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_3"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "3",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_47"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_66"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_91"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "91",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_34"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_94"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "94",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_53"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "53",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_18"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_32"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "32",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_24"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_79"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_75"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_55"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "55",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_81"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "81",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_98"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_70"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_10"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_96"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_2"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "2",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_36"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_45"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_66"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_69"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_2"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "2",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_82"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "82",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_56"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "56",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_94"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "94",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_73"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_53"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "53",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_39"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "39",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_53"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "53",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_52"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_42"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "42",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_72"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_60"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "60",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_20"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "20",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_66"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_47"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_71"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "71",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_48"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "48",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_96"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_82"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "82",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_7"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_75"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_16"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_7"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_80"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_43"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_52"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_26"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_69"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_80"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_61"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "61",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_72"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_55"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "55",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_71"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "71",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_47"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_49"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_45"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_51"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_95"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "95",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_26"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_51"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_31"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_93"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_87"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "87",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_80"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_33"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "33",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_32"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "32",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_43"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_92"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "92",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_98"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_4"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_65"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_59"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "59",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_45"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_84"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "84",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_24"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_73"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_36"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_89"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "89",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_88"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "88",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_51"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_98"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_14"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "14",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_60"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "60",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_84"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "84",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_66"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_28"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "28",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_36"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_30"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "30",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_91"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "91",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_83"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "83",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_96"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_10"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_52"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_0"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "0",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_99"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "99",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_65"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_46"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "46",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_80"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_65"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_41"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "41",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_35"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_69"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_95"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "95",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_43"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_77"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "77",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_34"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_72"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_65"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_26"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_0"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "0",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_14"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "14",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_56"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "56",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_97"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "97",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_31"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_34"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_93"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_85"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_41"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "41",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_55"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "55",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_91"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "91",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_85"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_55"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "55",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_67"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_67"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_88"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "88",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_25"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "25",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_41"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "41",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_19"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "19",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_40"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "40",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_37"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "37",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_9"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_31"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_67"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_29"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "29",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_6"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_64"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "64",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": null,
          "isTrackingEnabled": null,
          "updates": {
              "traceID": "18198081-8862-4cdb-be3a-eaf59603053b",
              "resourceId": "6b19ecb1-333f-4b81-9bef-1c3b4b7dceb3",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "69157e0c-7bf6-42eb-a53e-c431db9772ce",
              "revision": null,
              "time": 1688642652364,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "6b19ecb1-333f-4b81-9bef-1c3b4b7dceb3",
          "branch": null,
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": null,
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": null,
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "TATA_9MT",
          "groups": null,
          "externalId": null,
          "updateTime": 1688642652364,
          "sharedWith": null,
          "baseLocationId": null,
          "vehicleMake": null,
          "vehicleRegistrationNumber": "UKO8CA7242",
          "chassisNumber": "88877766655544433",
          "driverId": null,
          "createTime": null,
          "loadCapacity": 9,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "68bf5f57-bda5-485b-ae1b-ab28d9c959cb",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_24"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_97842567865743658"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "97842567865743658",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_12"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_12"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_21"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "21",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_81"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "81",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_89"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "89",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_5"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "5",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_24"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_33"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "33",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_40"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "40",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_68"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "68",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_37"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "37",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_5"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "5",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "dc7c63d8-19a1-4e88-85d2-09070b01c8d9",
              "resourceId": "68bf5f57-bda5-485b-ae1b-ab28d9c959cb",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "af851f5e-8c25-4734-bdd3-684aa8509bbd",
              "revision": null,
              "time": 1688642652539,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "68bf5f57-bda5-485b-ae1b-ab28d9c959cb",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 24,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "faaec633-d26a-4cf2-8f28-0e50b458a71f",
                  "revision": null,
                  "time": 1683539898621,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 12,
              "chassisType": "24ft",
              "includeMinHeight": false,
              "name": "TATA_24MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "HBAHBDKBD",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642652539,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_24ft",
          "vehicleRegistrationNumber": "UK07CB9552",
          "chassisNumber": "97842567865743658",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "driver": {
          "name": "RAMU",
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Market",
      "fleetOwner": {
          "name": "Uttarakhand Gujrat Carriers",
          "externalId": null,
          "uuid": "344e5bce-ad3c-423a-b713-f0d2e7604070"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "broker": {
          "name": "Uttarakhand Gujrat Carriers",
          "externalId": null,
          "uuid": "344e5bce-ad3c-423a-b713-f0d2e7604070"
      },
      "secondaryDriver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "uuid": "66b843d8-d1ee-49e7-a5b0-0052bf8d0c08",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_12"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_9"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_77"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "77",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_79"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_3"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "3",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_77"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "77",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_20"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "20",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_44"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "44",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_27"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "27",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_50"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_4"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": null,
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "3bfe0661-c7be-4d0e-aa81-0b64939ba24b",
              "resourceId": "66b843d8-d1ee-49e7-a5b0-0052bf8d0c08",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "92cc6161-7735-4653-b2bb-4d284222526f",
              "revision": null,
              "time": 1688642652656,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "66b843d8-d1ee-49e7-a5b0-0052bf8d0c08",
          "branch": null,
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 12,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "c60e06da-d5a6-48f9-8f51-6a7c26ed381a",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "1112c954-6e9c-497e-98c0-6ff688c1ba61",
                  "revision": null,
                  "time": 1683539779409,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": null,
              "uuid": "c60e06da-d5a6-48f9-8f51-6a7c26ed381a",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": null,
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": null,
              "numberOfWheels": 6,
              "chassisType": "12ft",
              "includeMinHeight": false,
              "name": "TATA_12MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": null,
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "TATA_12MT",
          "groups": null,
          "externalId": null,
          "updateTime": 1688642652656,
          "sharedWith": null,
          "baseLocationId": null,
          "vehicleMake": null,
          "vehicleRegistrationNumber": "HP20J9282",
          "chassisNumber": "1256583651735",
          "driverId": null,
          "createTime": null,
          "loadCapacity": 12,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "UnVerified",
      "trackingMode": "MANUAL",
      "uuid": "62b2428f-9a36-45b8-9404-e2ff1da1f6bd",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_24"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_39875986756758654"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "39875986756758654",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_12"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_12"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_14"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "14",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_78"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_30"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "30",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_62"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "62",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_57"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "57",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_19"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "19",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_53"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "53",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_40"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "40",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_3"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "3",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": false,
          "updates": {
              "traceID": "5774834f-f936-46f7-98e4-e24bec19ff7c",
              "resourceId": "62b2428f-9a36-45b8-9404-e2ff1da1f6bd",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "5a7dd8ea-c919-4c1f-9345-5b1304ad50aa",
              "revision": null,
              "time": 1688642652748,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "62b2428f-9a36-45b8-9404-e2ff1da1f6bd",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 24,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "faaec633-d26a-4cf2-8f28-0e50b458a71f",
                  "revision": null,
                  "time": 1683539898621,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 12,
              "chassisType": "24ft",
              "includeMinHeight": false,
              "name": "TATA_24MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "HBAHBDKBD",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642652748,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_24ft",
          "vehicleRegistrationNumber": "UK08CA2469",
          "chassisNumber": "39875986756758654",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "5b96c57b-353a-4847-a774-485e42482f71",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_24"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_45634684958439543"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45634684958439543",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_16"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_16"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_80"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_80"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_0"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "0",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_50"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_2"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "2",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_5"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "5",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_7"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_64"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "64",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_17"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "17",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "248dbef1-7b62-4e34-b899-29a8160ad297",
              "resourceId": "5b96c57b-353a-4847-a774-485e42482f71",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "0cfb8a02-3b20-40a2-a1e5-39b827bb0a81",
              "revision": null,
              "time": 1688642652854,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "5b96c57b-353a-4847-a774-485e42482f71",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 24,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "faaec633-d26a-4cf2-8f28-0e50b458a71f",
                  "revision": null,
                  "time": 1683539898621,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 12,
              "chassisType": "24ft",
              "includeMinHeight": false,
              "name": "TATA_24MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "HBAHBDKBD",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642652854,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_24ft",
          "vehicleRegistrationNumber": "UK08CA4632",
          "chassisNumber": "45634684958439543",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "CJ DARCL LOGISICS LIMITED",
          "externalId": null,
          "uuid": "3f80a600-d1b0-4b48-8b7b-806b3110a44c"
      },
      "verificationStatus": "UnVerified",
      "trackingMode": "MANUAL",
      "broker": {
          "name": "CJ DARCL LOGISICS LIMITED",
          "externalId": null,
          "uuid": "3f80a600-d1b0-4b48-8b7b-806b3110a44c"
      },
      "secondaryDriver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "uuid": "55913d4c-c328-4b84-b9b0-4c455f1d310a",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "GrossWeight_12365.0"
                  ],
                  "fieldKey": "GrossWeight",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12365.0",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_2515151"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "2515151",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_39"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "39",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_59"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "59",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_74"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "74",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_98"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_36"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_70"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_8"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "8",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_86"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "86",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_80"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": null,
          "isTrackingEnabled": false,
          "updates": {
              "traceID": "0bdb3e7f-a26a-404b-9607-018d40c35138",
              "resourceId": "55913d4c-c328-4b84-b9b0-4c455f1d310a",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "162986ac-813c-40b3-9e6c-bbf55bd04f51",
              "revision": null,
              "time": 1688642652972,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "55913d4c-c328-4b84-b9b0-4c455f1d310a",
          "branch": null,
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": null,
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": null,
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "TATA_24MT",
          "groups": null,
          "externalId": null,
          "updateTime": 1688642652972,
          "sharedWith": null,
          "baseLocationId": null,
          "vehicleMake": null,
          "vehicleRegistrationNumber": "RJ11GC5637",
          "chassisNumber": "6666641155555",
          "driverId": null,
          "createTime": null,
          "loadCapacity": 12,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "4b5ad1f4-33c6-4ca3-b1af-c4096bfb3d66",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_20"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "20",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_95834865874356874"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "95834865874356874",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_16"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_16"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_17"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "17",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_13"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "13",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_73"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_17"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "17",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_98"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_35"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_91"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "91",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_40"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "40",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_25"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "25",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_38"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "38",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "9a96bd30-cb7a-4675-86f0-3d2637ebe042",
              "resourceId": "4b5ad1f4-33c6-4ca3-b1af-c4096bfb3d66",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "ee49cfcb-ad97-4885-9689-06d0ee2e8382",
              "revision": null,
              "time": 1688642653135,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "4b5ad1f4-33c6-4ca3-b1af-c4096bfb3d66",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 20,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "6f04487d-67bf-464b-ac0a-be706040250a",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "79440e9b-4828-47cd-be5b-dc05461d2fe6",
                  "revision": null,
                  "time": 1683614730284,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "6f04487d-67bf-464b-ac0a-be706040250a",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 16,
              "chassisType": "20ft",
              "includeMinHeight": false,
              "name": "TATA_20MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "347567843658",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642653135,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_20ft",
          "vehicleRegistrationNumber": "UK08CA5044",
          "chassisNumber": "95834865874356874",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "4b0e44e4-ccbf-4d7b-afc3-55c1fac172b1",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [
              "f0a023b5-f66f-42e7-bdd1-5f87361fce0b",
              "d2cddc8b-8858-4d65-93a2-bd35944c7048",
              "3fc4a391-d9d7-4f21-9627-f55a12a56320",
              "947edd8b-40ab-4953-ae07-11649dd63458",
              "3e01afa9-2671-45fe-9a09-a7feef7dd3c5"
          ],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_9"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_MB1AXGCD5JRGW2026"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "MB1AXGCD5JRGW2026",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_6"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_6"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_7"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_65"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_57"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "57",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_98"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_88"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "88",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_14"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "14",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_11"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "11",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_35"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_68"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "68",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_34"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "8e81d04b-241a-4afb-8b1f-6a866f63b48e",
              "resourceId": "4b0e44e4-ccbf-4d7b-afc3-55c1fac172b1",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "8171a569-e16f-4788-84c2-56096c357005",
              "revision": null,
              "time": 1688642653354,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "4b0e44e4-ccbf-4d7b-afc3-55c1fac172b1",
          "branch": null,
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 9,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "34cccbe4-7029-45c7-a598-583dfa249667",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "3e7ed09d-f6b7-4bc7-8f10-35e1944e838a",
                  "revision": null,
                  "time": 1683539739973,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "34cccbe4-7029-45c7-a598-583dfa249667",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 6,
              "chassisType": "9ft",
              "includeMinHeight": false,
              "name": "TATA_9MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "T3600",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642653354,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_9ft",
          "vehicleRegistrationNumber": "UK08CA9603",
          "chassisNumber": "MB1AXGCD5JRGW2026",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Uttarakhand Gujrat Carriers",
          "externalId": null,
          "uuid": "344e5bce-ad3c-423a-b713-f0d2e7604070"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "broker": {
          "name": "Uttarakhand Gujrat Carriers",
          "externalId": null,
          "uuid": "344e5bce-ad3c-423a-b713-f0d2e7604070"
      },
      "uuid": "48eb58c6-31fd-48f9-9470-73855140cba2",
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "Road Tax_64"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "64",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_83"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "83",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_45"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_89"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "89",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_38"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "38",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_26"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_69"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_43"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_65"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_68"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "68",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_43"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_15"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_31"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_31"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_49"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_72"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_36"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_41"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "41",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_18"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_16"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_51"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_49"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_50"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_79"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_12"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_93"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_4"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_4"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_67"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_52"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_68"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "68",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_57"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "57",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_36"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_12"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_35"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_50"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_69"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_73"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_79"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_81"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "81",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_24"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_80"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_62"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "62",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_26"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_31"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_26"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_69"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_63"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "63",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_9"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_4"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_69"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_75"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_23"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "23",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_21"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "21",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_65"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_8"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "8",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_24"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_52"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_90"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "90",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_75"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_64"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "64",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_40"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "40",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_12"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_76"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "76",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_78"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_74"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "74",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_24"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_85"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_79"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_96"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_70"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_90"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "90",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_66"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_34"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_89"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "89",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_57"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "57",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_70"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_17"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "17",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_13"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "13",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_38"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "38",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_85"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_34"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_45"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_93"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_12"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_83"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "83",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_10"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_22"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "22",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_96"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_27"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "27",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_75"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_5"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "5",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_10"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_50"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_61"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "61",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_58"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "58",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_58"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "58",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_15"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_16"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_71"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "71",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_78"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_35"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_1"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "1",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_23"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "23",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_18"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_46"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "46",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_26"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_35"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_16"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_19"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "19",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_47"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_31"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_90"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "90",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_3"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "3",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_47"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_66"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_91"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "91",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_34"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_94"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "94",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_53"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "53",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_18"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_32"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "32",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_24"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_79"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_75"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_55"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "55",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_81"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "81",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_98"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_70"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_10"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_96"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_2"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "2",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_36"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_45"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_66"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_69"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_2"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "2",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_82"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "82",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_56"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "56",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_94"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "94",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_73"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_53"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "53",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_39"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "39",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_53"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "53",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_52"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_42"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "42",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_72"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_60"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "60",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_20"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "20",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_66"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_47"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_71"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "71",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_48"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "48",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_96"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_82"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "82",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_7"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_75"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_16"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_7"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_80"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_43"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_52"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_26"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_69"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_80"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_61"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "61",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_72"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_55"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "55",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_71"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "71",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_47"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_49"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_45"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_51"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_95"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "95",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_26"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_51"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_31"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_93"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_87"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "87",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_80"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_33"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "33",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_32"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "32",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_43"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_92"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "92",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_98"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_4"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_65"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_59"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "59",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_45"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_84"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "84",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_24"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_73"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_36"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_89"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "89",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_88"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "88",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_51"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_98"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_14"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "14",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_60"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "60",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_84"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "84",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_66"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_28"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "28",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_36"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_30"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "30",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_91"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "91",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_83"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "83",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_96"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_10"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_52"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_0"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "0",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_99"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "99",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_65"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_46"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "46",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_80"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_65"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_41"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "41",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_35"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_69"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_95"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "95",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_43"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_77"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "77",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_34"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_72"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_65"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_26"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_0"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "0",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_14"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "14",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_56"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "56",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_97"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "97",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_31"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_34"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_93"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_85"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_41"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "41",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_55"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "55",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_91"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "91",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_85"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_55"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "55",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_67"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_67"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_88"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "88",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_25"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "25",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_41"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "41",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_19"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "19",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_40"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "40",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_37"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "37",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_9"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_31"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_67"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_29"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "29",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_6"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_64"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "64",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_81"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "81",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_71"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "71",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_73"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_26"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_48"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "48",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_31"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_84"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "84",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_86"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "86",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_67"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_74"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "74",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_64"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "64",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_34"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_40"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "40",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_49"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_76"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "76",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_51"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_49"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_22"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "22",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_82"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "82",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_93"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_33"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "33",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_11"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "11",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_69"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_61"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "61",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_78"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_15"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_44"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "44",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_6"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_17"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "17",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_31"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_62"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "62",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_93"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_47"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_53"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "53",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_8"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "8",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_37"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "37",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_61"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "61",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_73"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_1"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "1",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_11"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "11",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_76"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "76",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_18"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_39"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "39",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_47"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_2"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "2",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_59"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "59",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_32"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "32",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_87"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "87",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_45"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_15"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_11"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "11",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_34"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_61"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "61",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_82"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "82",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_88"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "88",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_75"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_15"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_13"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "13",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_27"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "27",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_50"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_95"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "95",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_4"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_61"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "61",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_86"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "86",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_62"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "62",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_51"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_54"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "54",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_70"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_10"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_84"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "84",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_86"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "86",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_67"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": null,
          "isTrackingEnabled": false,
          "updates": {
              "traceID": "0fbcd344-0f4f-47e3-a986-1d09239bd14c",
              "resourceId": "48eb58c6-31fd-48f9-9470-73855140cba2",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "7a179583-1f2c-46b2-8163-8d7fce8ded4d",
              "revision": null,
              "time": 1688642653572,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "48eb58c6-31fd-48f9-9470-73855140cba2",
          "branch": null,
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Closed",
              "passingCapacityMT": 8,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "4263b1e0-2c47-4dcc-aff8-997aaec507db",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "c5f3a250-6fe0-4211-93c3-0b94ce773de7",
                  "revision": null,
                  "time": 1683810928064,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "4263b1e0-2c47-4dcc-aff8-997aaec507db",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 6,
              "chassisType": "8ft",
              "includeMinHeight": false,
              "name": "TATA_8MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": null,
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "TATA_8MT",
          "groups": null,
          "externalId": null,
          "updateTime": 1688642653572,
          "sharedWith": null,
          "baseLocationId": null,
          "vehicleMake": null,
          "vehicleRegistrationNumber": "HR46D9902",
          "chassisNumber": "12354",
          "driverId": null,
          "createTime": null,
          "loadCapacity": 7,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "driver": {
          "name": "RAMAN",
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Market",
      "fleetOwner": {
          "name": "Uttarakhand Gujrat Carriers",
          "externalId": null,
          "uuid": "344e5bce-ad3c-423a-b713-f0d2e7604070"
      },
      "secondaryDriver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "device": null,
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "3f74ce4a-5336-44b8-b22c-7a86bce49080",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_24"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_09786890767890768"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "09786890767890768",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_16"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_16"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_98"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_7"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_72"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_82"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "82",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_19"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "19",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_22"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "22",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_64"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "64",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_98"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_11"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "11",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "7edb2c7b-8952-47f8-b392-833cef946cd6",
              "resourceId": "3f74ce4a-5336-44b8-b22c-7a86bce49080",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "fcbd27f4-4439-48ee-9579-20cb53b8cf33",
              "revision": null,
              "time": 1688642654161,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "3f74ce4a-5336-44b8-b22c-7a86bce49080",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 24,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "faaec633-d26a-4cf2-8f28-0e50b458a71f",
                  "revision": null,
                  "time": 1683539898621,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 12,
              "chassisType": "24ft",
              "includeMinHeight": false,
              "name": "TATA_24MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "HBAHBDKBD",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642654161,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_24ft",
          "vehicleRegistrationNumber": "UK08CA4163",
          "chassisNumber": "09786890767890768",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "3e94c61d-e27b-4b96-b70a-8c23ed7f7b04",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_9"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_8274Y247329829479"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "8274Y247329829479",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_6"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_6"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_7"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_69"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_75"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_62"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "62",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_3"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "3",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_26"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_18"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_63"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "63",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_41"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "41",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_11"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "11",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "e0c40d2a-b340-4fdc-9523-30048041bfcc",
              "resourceId": "3e94c61d-e27b-4b96-b70a-8c23ed7f7b04",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "fbc7e961-42e2-4310-b12d-bf8e93d14a5e",
              "revision": null,
              "time": 1688642654299,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "3e94c61d-e27b-4b96-b70a-8c23ed7f7b04",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 9,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "34cccbe4-7029-45c7-a598-583dfa249667",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "3e7ed09d-f6b7-4bc7-8f10-35e1944e838a",
                  "revision": null,
                  "time": 1683539739973,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "34cccbe4-7029-45c7-a598-583dfa249667",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 6,
              "chassisType": "9ft",
              "includeMinHeight": false,
              "name": "TATA_9MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "T3600",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642654299,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_9ft",
          "vehicleRegistrationNumber": "UK08CA9698",
          "chassisNumber": "8274Y247329829479",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "3c914388-904b-4708-b101-e62a8a766e59",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_9"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_83475684765348756"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "83475684765348756",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_6"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_6"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_6"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_64"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "64",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_91"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "91",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_29"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "29",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_0"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "0",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_31"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_77"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "77",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_56"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "56",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_44"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "44",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_6"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "6",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "f47e0e40-c637-4fea-b9f0-e0d386f5dea8",
              "resourceId": "3c914388-904b-4708-b101-e62a8a766e59",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "6aef5c82-5f9a-4264-9197-d6839e9b556e",
              "revision": null,
              "time": 1688642654413,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "3c914388-904b-4708-b101-e62a8a766e59",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 9,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "34cccbe4-7029-45c7-a598-583dfa249667",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "3e7ed09d-f6b7-4bc7-8f10-35e1944e838a",
                  "revision": null,
                  "time": 1683539739973,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "34cccbe4-7029-45c7-a598-583dfa249667",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 6,
              "chassisType": "9ft",
              "includeMinHeight": false,
              "name": "TATA_9MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "T3600",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642654413,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_9ft",
          "vehicleRegistrationNumber": "UK08CB0990",
          "chassisNumber": "83475684765348756",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "3c0666b0-4de5-49f2-bada-af168598b9d3",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_24"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_89426549856496546"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "89426549856496546",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_16"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_16"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_21"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "21",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_87"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "87",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_0"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "0",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_87"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "87",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_19"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "19",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_96"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_59"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "59",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_24"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_26"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_33"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "33",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "73e9422d-f57b-4df3-b648-98e79c6f0b22",
              "resourceId": "3c0666b0-4de5-49f2-bada-af168598b9d3",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "04ac62c8-8881-4c60-b556-fd77be38f7dd",
              "revision": null,
              "time": 1688642654589,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "3c0666b0-4de5-49f2-bada-af168598b9d3",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 24,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "faaec633-d26a-4cf2-8f28-0e50b458a71f",
                  "revision": null,
                  "time": 1683539898621,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 12,
              "chassisType": "24ft",
              "includeMinHeight": false,
              "name": "TATA_24MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "HBAHBDKBD",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642654589,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_24ft",
          "vehicleRegistrationNumber": "UK07CB9553",
          "chassisNumber": "89426549856496546",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "2e1da7f1-ec3a-4428-b38d-655cd0638216",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [
              "112b0616-f006-4314-a72a-2c73892434f9",
              "57eab3e3-e9e4-47ad-b85a-cb805c9db0e2",
              "83c0206a-833a-4db3-8dae-3795c6756a29",
              "3453e103-6059-44fc-b759-039247ca0424"
          ],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_9"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_7"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_MAT416425A7B04727"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "MAT416425A7B04727",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_6"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_6"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_92"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "92",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_89"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "89",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_6"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_79"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_16"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_58"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "58",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_27"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "27",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_77"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "77",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_17"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "17",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "49e39676-49ee-41af-8be6-5bc0c1a37f9f",
              "resourceId": "2e1da7f1-ec3a-4428-b38d-655cd0638216",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "ab6d9e6a-76fb-4725-9b9a-6da01323004d",
              "revision": null,
              "time": 1688642654713,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "2e1da7f1-ec3a-4428-b38d-655cd0638216",
          "branch": null,
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 9,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "34cccbe4-7029-45c7-a598-583dfa249667",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "3e7ed09d-f6b7-4bc7-8f10-35e1944e838a",
                  "revision": null,
                  "time": 1683539739973,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "34cccbe4-7029-45c7-a598-583dfa249667",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 6,
              "chassisType": "9ft",
              "includeMinHeight": false,
              "name": "TATA_9MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "T3600",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642654713,
          "sharedWith": [],
          "baseLocationId": "f4576716-65c0-44c1-98b0-4e92af9f8ead",
          "vehicleMake": "TATA_9ft",
          "vehicleRegistrationNumber": "UK08CA1327",
          "chassisNumber": "MAT416425A7B04727",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "2d508a23-ce62-4d72-b8ed-6d37b7a2ed6e",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_18"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_85743865943758943"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85743865943758943",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_12"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_12"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_90"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "90",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_20"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "20",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_46"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "46",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_50"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_48"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "48",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_38"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "38",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_7"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_50"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_84"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "84",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "e41911d1-a0e2-4c31-9943-4ef6de05804d",
              "resourceId": "2d508a23-ce62-4d72-b8ed-6d37b7a2ed6e",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "28c2ff11-7b12-4c89-9c05-cb895d7c60ad",
              "revision": null,
              "time": 1688642654813,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "2d508a23-ce62-4d72-b8ed-6d37b7a2ed6e",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 18,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "0348540d-bad7-4c14-8fa7-f641a94e478b",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "8b8f3cb0-2946-42dc-851f-2e0b2103295e",
                  "revision": null,
                  "time": 1683539814230,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "0348540d-bad7-4c14-8fa7-f641a94e478b",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 10,
              "chassisType": "18ft",
              "includeMinHeight": false,
              "name": "TATA_18MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "ET45",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642654813,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_18ft",
          "vehicleRegistrationNumber": "UK08CA1924",
          "chassisNumber": "85743865943758943",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "1ecb2aad-d87f-4d55-8cf8-62d400fe62fd",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_24"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_23456454563543564"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "23456454563543564",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_16"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_16"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_48"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "48",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_39"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "39",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_68"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "68",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_7"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_82"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "82",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_26"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_28"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "28",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_5"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "5",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_19"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "19",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "02f9f786-a057-492b-b991-e8d84ebf975b",
              "resourceId": "1ecb2aad-d87f-4d55-8cf8-62d400fe62fd",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "fade5b73-af26-47d9-b1a3-da4fc978349a",
              "revision": null,
              "time": 1688642654950,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "1ecb2aad-d87f-4d55-8cf8-62d400fe62fd",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 24,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "faaec633-d26a-4cf2-8f28-0e50b458a71f",
                  "revision": null,
                  "time": 1683539898621,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 12,
              "chassisType": "24ft",
              "includeMinHeight": false,
              "name": "TATA_24MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "HBAHBDKBD",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642654951,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_24ft",
          "vehicleRegistrationNumber": "UK08CA9968",
          "chassisNumber": "23456454563543564",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "driver": {
          "name": "SONU",
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Market",
      "fleetOwner": {
          "name": "ALPS Logistics Ltd",
          "externalId": null,
          "uuid": "02dc21d3-976c-4cb2-9a08-b772f90af7ea"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "broker": {
          "name": "ALPS Logistics Ltd",
          "externalId": null,
          "uuid": "02dc21d3-976c-4cb2-9a08-b772f90af7ea"
      },
      "secondaryDriver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "uuid": "19bb515c-0659-4d7f-b5e8-424fff685acf",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "Road Tax_28"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "28",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_3"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "3",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_96"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_27"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "27",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_39"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "39",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_7"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_92"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "92",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_52"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_13"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "13",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_68"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "68",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_43"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_15"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_31"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_31"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_49"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_72"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_36"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_41"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "41",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_18"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_16"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_51"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_49"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_50"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_79"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_12"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_93"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_4"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_4"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_67"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_52"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_68"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "68",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_57"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "57",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_36"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_12"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_35"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_50"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_69"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_73"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_79"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_81"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "81",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_24"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_80"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_62"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "62",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_26"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_31"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_26"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_69"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_63"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "63",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_9"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_4"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_69"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_75"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_23"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "23",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_21"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "21",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_65"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_8"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "8",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_24"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_52"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_90"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "90",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_75"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_64"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "64",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_40"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "40",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_12"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_76"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "76",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_78"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_74"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "74",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_24"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_85"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_79"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_96"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_70"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_90"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "90",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_66"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_34"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_89"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "89",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_57"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "57",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_70"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_17"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "17",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_13"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "13",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_38"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "38",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_85"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_34"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_45"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_93"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_12"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_83"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "83",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_10"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_22"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "22",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_96"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_27"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "27",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_75"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_5"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "5",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_10"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_50"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_61"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "61",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_58"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "58",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_58"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "58",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_15"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_16"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_71"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "71",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_78"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_35"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_1"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "1",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_23"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "23",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_18"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_46"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "46",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_26"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_35"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_16"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_19"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "19",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_47"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_31"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_90"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "90",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_3"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "3",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_47"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_66"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_91"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "91",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_34"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_94"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "94",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_53"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "53",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_18"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_32"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "32",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_24"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_79"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "79",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_75"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_55"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "55",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_81"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "81",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_98"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_70"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_10"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_96"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_2"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "2",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_36"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_45"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_66"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_69"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_2"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "2",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_82"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "82",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_56"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "56",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_94"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "94",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_73"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_53"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "53",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_39"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "39",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_53"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "53",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_52"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_42"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "42",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_72"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_60"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "60",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_20"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "20",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_66"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_47"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_71"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "71",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_48"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "48",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_96"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_82"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "82",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_7"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_75"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_16"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_7"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "7",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_80"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_43"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_52"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_26"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_69"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_80"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_61"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "61",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_72"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_55"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "55",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_71"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "71",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_47"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_49"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_45"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_51"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_95"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "95",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_26"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_51"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_31"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_93"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_87"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "87",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_80"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_33"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "33",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_32"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "32",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_43"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_92"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "92",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_98"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_4"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_65"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_59"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "59",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_45"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_84"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "84",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_24"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_73"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_36"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_89"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "89",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_88"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "88",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_51"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_98"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_14"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "14",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_60"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "60",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_84"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "84",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_66"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "66",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_28"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "28",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_36"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_30"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "30",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_91"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "91",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_83"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "83",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_96"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_10"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_52"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_0"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "0",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_99"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "99",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_65"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_46"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "46",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_80"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_65"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_41"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "41",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_35"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_69"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_95"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "95",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_43"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "43",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_77"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "77",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_34"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_72"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "72",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_65"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_26"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_0"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "0",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_14"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "14",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_56"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "56",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_97"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "97",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_31"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_34"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_93"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_85"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_41"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "41",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_55"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "55",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_91"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "91",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_85"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_55"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "55",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_67"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_67"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_88"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "88",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_25"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "25",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_41"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "41",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_19"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "19",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_40"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "40",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_37"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "37",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_9"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_31"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_67"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_29"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "29",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_6"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_64"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "64",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_81"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "81",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_71"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "71",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_73"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_26"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "26",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_48"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "48",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_31"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_84"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "84",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_86"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "86",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_67"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_74"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "74",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_64"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "64",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_34"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_40"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "40",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_49"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_76"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "76",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_51"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_49"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_22"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "22",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_82"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "82",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_93"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_33"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "33",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_11"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "11",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_69"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_61"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "61",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_78"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_15"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_44"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "44",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_6"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_17"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "17",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_31"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_62"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "62",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_93"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "93",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_47"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_53"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "53",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_8"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "8",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_37"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "37",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_61"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "61",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_73"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_1"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "1",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_11"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "11",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_76"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "76",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_18"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_39"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "39",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_47"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "47",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_2"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "2",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_59"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "59",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_32"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "32",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_87"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "87",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_45"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_15"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_11"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "11",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_34"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_61"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "61",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_82"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "82",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_88"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "88",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_75"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "75",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_15"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_13"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "13",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_27"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "27",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_50"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_95"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "95",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_4"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "4",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_61"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "61",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_86"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "86",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_62"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "62",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_51"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_54"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "54",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_70"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "70",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_10"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "10",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_84"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "84",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_86"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "86",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_67"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_78"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_73"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_37"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "37",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_57"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "57",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_74"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "74",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_51"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "51",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_64"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "64",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_1"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "1",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_49"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_80"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_88"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "88",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_67"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "67",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_19"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "19",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_90"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "90",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_39"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "39",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_16"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_11"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "11",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_74"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "74",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_36"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_49"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_13"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "13",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_6"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_98"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "98",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_55"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "55",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_2"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "2",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_49"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "49",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_65"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "65",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_73"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "73",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_92"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "92",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_71"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "71",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_27"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "27",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_31"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_63"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "63",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_74"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "74",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_80"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_54"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "54",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_39"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "39",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_31"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_36"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "36",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_35"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_39"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "39",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_81"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "81",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_84"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "84",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_14"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "14",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_92"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "92",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_96"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_15"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "15",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_2"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "2",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_30"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "30",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_12"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_9"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_52"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "52",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_6"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "6",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_82"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "82",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_69"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_25"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "25",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_50"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_17"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "17",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_60"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "60",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_80"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_1"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "1",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_11"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "11",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_45"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "45",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_16"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_19"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "19",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_18"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_56"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "56",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_44"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "44",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_50"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "50",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_28"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "28",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_85"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "85",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_35"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "35",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": null,
          "isTrackingEnabled": false,
          "updates": {
              "traceID": "f819fd48-bbf8-4ba9-92c4-c74b6092dafe",
              "resourceId": "19bb515c-0659-4d7f-b5e8-424fff685acf",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "c1931ee6-5b44-431c-84ad-5774d4f79bd0",
              "revision": null,
              "time": 1688642655244,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "19bb515c-0659-4d7f-b5e8-424fff685acf",
          "branch": null,
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 24,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "faaec633-d26a-4cf2-8f28-0e50b458a71f",
                  "revision": null,
                  "time": 1683539898621,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": null,
              "uuid": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": null,
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": null,
              "numberOfWheels": 12,
              "chassisType": "24ft",
              "includeMinHeight": false,
              "name": "TATA_24MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": null,
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "TATA_24MT",
          "groups": null,
          "externalId": null,
          "updateTime": 1688642655244,
          "sharedWith": null,
          "baseLocationId": null,
          "vehicleMake": null,
          "vehicleRegistrationNumber": "UP12BT4844",
          "chassisNumber": "84237872486328472674",
          "driverId": null,
          "createTime": null,
          "loadCapacity": 24,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "1376d545-a9ee-4feb-9339-c173c325a6a3",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_24"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "24",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_34875634765784358"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "34875634765784358",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_12"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_12"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "12",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_21"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "21",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_18"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "18",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_56"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "56",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_61"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "61",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_20"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "20",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_3"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "3",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_31"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "31",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_96"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "96",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_41"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "41",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_84"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "84",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "822464c7-fad2-4998-b655-7cbc3aaa4da9",
              "resourceId": "1376d545-a9ee-4feb-9339-c173c325a6a3",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "2610bb24-a699-4bf3-919f-f13857629616",
              "revision": null,
              "time": 1688642655725,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "1376d545-a9ee-4feb-9339-c173c325a6a3",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Open",
              "passingCapacityMT": 24,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "faaec633-d26a-4cf2-8f28-0e50b458a71f",
                  "revision": null,
                  "time": 1683539898621,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "3a0acf70-7cdc-45df-85ff-e204d6dbefec",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 12,
              "chassisType": "24ft",
              "includeMinHeight": false,
              "name": "TATA_24MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "HBAHBDKBD",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642655725,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_24ft",
          "vehicleRegistrationNumber": "UK07CB9573",
          "chassisNumber": "34875634765784358",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  },
  {
      "forwardingAgent": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "driver": {
          "name": null,
          "externalId": null,
          "uuid": null
      },
      "fleetType": "Owned",
      "fleetOwner": {
          "name": "Forace Polymers Pvt. Ltd. ",
          "externalId": null,
          "uuid": "68b9aa4c-2b85-4d03-a936-045b896590a7"
      },
      "verificationStatus": "Verified",
      "trackingMode": "MANUAL",
      "uuid": "02a79d63-6329-4283-a893-6460c54e977f",
      "device": null,
      "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
      "vehicle": {
          "vtsDeviceId": null,
          "kmDriven": null,
          "secondaryDriverId": null,
          "attachedDocs": [],
          "customFields": [
              {
                  "indexedValue": [
                      "LoadedWeight_25"
                  ],
                  "fieldKey": "LoadedWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "25",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "EngineNumber_02394793087483949"
                  ],
                  "fieldKey": "EngineNumber",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "02394793087483949",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "baseLocation_FORACE POLYMERS HUB"
                  ],
                  "fieldKey": "baseLocation",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "FORACE POLYMERS HUB",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "NumberOfWheels_16"
                  ],
                  "fieldKey": "NumberOfWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "RunningWheels_16"
                  ],
                  "fieldKey": "RunningWheels",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "16",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UnloadenWeight_21"
                  ],
                  "fieldKey": "UnloadenWeight",
                  "valueType": "string",
                  "fieldType": "number",
                  "value": "21",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Road Tax_9"
                  ],
                  "fieldKey": "Road Tax",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "9",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Fitness_80"
                  ],
                  "fieldKey": "Fitness",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "80",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "N.Permit_69"
                  ],
                  "fieldKey": "N.Permit",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "69",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Salary_20"
                  ],
                  "fieldKey": "Salary",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "20",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "INTT PER TRIP_97"
                  ],
                  "fieldKey": "INTT PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "97",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "DEP PER TRIP_91"
                  ],
                  "fieldKey": "DEP PER TRIP",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "91",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "REP OTHER THAN TOUR_41"
                  ],
                  "fieldKey": "REP OTHER THAN TOUR",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "41",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "UREA IN TRUCK_78"
                  ],
                  "fieldKey": "UREA IN TRUCK",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "78",
                  "definitionId": null
              },
              {
                  "indexedValue": [
                      "Insurance_23"
                  ],
                  "fieldKey": "Insurance",
                  "valueType": "string",
                  "fieldType": "text",
                  "value": "23",
                  "definitionId": null
              }
          ],
          "floorType": null,
          "description": null,
          "source": "FRETRON",
          "isTrackingEnabled": true,
          "updates": {
              "traceID": "279493c9-71af-4127-90b0-346a726b73c5",
              "resourceId": "02a79d63-6329-4283-a893-6460c54e977f",
              "updatedBy": "USER",
              "changes": null,
              "sourceOfInformation": null,
              "description": "Update Custom Fields.",
              "forwardReasons": [
                  "partner.fleet.custom.fields.updated"
              ],
              "userId": "ebe5751a-a05b-46b6-91b4-1c112a90f638",
              "uuid": "54caa290-d6e9-4fd4-94fd-d16bb9c8783d",
              "revision": null,
              "time": 1688642656111,
              "forwardedFrom": null,
              "resourceType": "PartnerFleet",
              "updateType": null
          },
          "uuid": "02a79d63-6329-4283-a893-6460c54e977f",
          "branch": {
              "address": "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
              "updatedBy": null,
              "customFields": null,
              "regionName": null,
              "externalId": null,
              "branchName": null,
              "type": [
                  "IT",
                  "Operation",
                  "Sales",
                  ""
              ],
              "updates": null,
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "geoLocation": [
                  78.04092032834541,
                  29.919558374370858
              ],
              "regionId": null,
              "name": "Forace Polymers Pvt. Ltd. ",
              "zoneId": null,
              "_id": "68b9aa4c-2b85-4d03-a936-045b896590a7",
              "zoneName": null,
              "contacts": [],
              "officeType": null,
              "materialServices": null
          },
          "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
          "vehicleLoadType": {
              "bodyType": "Closed",
              "passingCapacityMT": 25,
              "minLength": 0,
              "updates": {
                  "traceID": null,
                  "resourceId": "668dc517-5b77-4746-ba2d-8e0cd986d1ef",
                  "updatedBy": "USER",
                  "changes": null,
                  "sourceOfInformation": null,
                  "description": "Created Load Type.",
                  "forwardReasons": [
                      "load.type.created.event"
                  ],
                  "userId": "fc07257b-0752-4194-a7a0-6527f6775e77",
                  "uuid": "bd9e7e7b-fc72-4aaa-8b3d-252bc8ff21c8",
                  "revision": null,
                  "time": 1684131315478,
                  "forwardedFrom": null,
                  "resourceType": "LoadTypes",
                  "updateType": null
              },
              "vehicleCategories": [],
              "uuid": "668dc517-5b77-4746-ba2d-8e0cd986d1ef",
              "orgId": "11a39d2f-1485-4010-bf96-69e9fdcde203",
              "vehicleCategory": "Owned",
              "includeMaxLength": false,
              "minHeight": 0,
              "maxHeight": -1,
              "passingCapacityCFT": null,
              "bodyTypes": [],
              "partnerName": null,
              "includeMinLength": false,
              "partnerExternalId": null,
              "externalId": null,
              "chassisTypes": [],
              "numberOfWheels": 16,
              "chassisType": "25ft",
              "includeMinHeight": false,
              "name": "TATA_25MT",
              "partnerId": null,
              "includeMaxHeight": false,
              "dimensionString": null,
              "maxLength": -1
          },
          "associatedWith": null,
          "isDeleted": null,
          "customerId": null,
          "vehicleModel": "TAT9831274",
          "mileageEmpty": null,
          "mileageLoaded": null,
          "vehicleType": "hire",
          "groups": [],
          "externalId": null,
          "updateTime": 1688642656111,
          "sharedWith": [],
          "baseLocationId": null,
          "vehicleMake": "TATA_25ft",
          "vehicleRegistrationNumber": "UK08CA5274",
          "chassisNumber": "02394793087483949",
          "driverId": null,
          "createTime": null,
          "loadCapacity": null,
          "truckLength": null,
          "category": null,
          "groupsExtended": null
      },
      "status": "ACTIVE"
  }
]

const placeMaster = [
  {
    hubId: null,
    boundary: null,
    address: "Mehsana - Himatnagar Hwy, Heduva Hanumat, Gujarat 384012, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 23.5696,
      longitude: 72.39612,
    },
    suggestedRadius: 136,
    isOwned: false,
    centerCoordinates: [72.39612, 23.5696],
    placeId: "48ae0f65-ef33-4dbf-9cdd-c4d42ba93e2e",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Zircar Refractories Ltd.",
    state: null,
    category: "Manufacturing Plant/Factory/Yard",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Srinagar - Kanyakumari Hwy, Kishora, Haryana 131001, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 28.97546400442843,
      longitude: 77.08612906351682,
    },
    suggestedRadius: 163,
    isOwned: false,
    centerCoordinates: [77.08612906351682, 28.97546400442843],
    placeId: "5e5e5af0-790e-4914-80a7-b255b0bcfff8",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Voestalpine VAE VKN India Pvt. Ltd.",
    state: null,
    category: "Manufacturing Plant/Factory/Yard",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 29.91933522958502,
      longitude: 78.04160732902595,
    },
    suggestedRadius: 100,
    isOwned: false,
    centerCoordinates: [78.04160732902595, 29.91933522958502],
    placeId: "9915ee0d-9c70-410f-b474-b33749622c18",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Uttarakhand Gujrat Carriers",
    state: null,
    category: "Fleet Office",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Delhi - Jaipur Expy, Majra Gurdas, Haryana 123401, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 28.15918974101062,
      longitude: 76.69425848555838,
    },
    suggestedRadius: 100,
    isOwned: false,
    centerCoordinates: [76.69425848555838, 28.15918974101062],
    placeId: "34821bae-2737-4ea1-b424-58c1e7d8726f",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Uniproducts (India) Ltd.",
    state: null,
    category: "Manufacturing Plant/Factory/Yard",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "NH 48, Atak Pardi, Valsad, Gujarat 396002, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 20.594515401294267,
      longitude: 72.95084182153478,
    },
    suggestedRadius: 109,
    isOwned: false,
    centerCoordinates: [72.95084182153478, 20.594515401294267],
    placeId: "6729241e-26c8-42dc-a05b-edad10fb6cb8",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Tipco Industries Pvt  Limited",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Road Number 8, Adarsh Nagar, Ajmer, Rajasthan 305002, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 26.41395,
      longitude: 74.66298,
    },
    suggestedRadius: 340,
    isOwned: false,
    centerCoordinates: [74.66298, 26.41395],
    placeId: "2b5989f2-b7ad-4d3c-972e-5894dd1246fd",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Standard Alloy India (P) Ltd",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "193, GT Road, Pocket K, Nehru Nagar III, Nehru Nagar, Ghaziabad, Uttar Pradesh 201001, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 28.642869444815783,
      longitude: 77.43523477939719,
    },
    suggestedRadius: 100,
    isOwned: false,
    centerCoordinates: [77.43523477939719, 28.642869444815783],
    placeId: "49c58019-02a7-4b53-ad5f-ecccfd020922",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Srinath Ji Ispat Ltd.",
    state: null,
    category: "Manufacturing Plant/Factory/Yard",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "Mhow-Ghatabillod Rd, Pithampur Industrial Area, Madhya Pradesh 454775, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 22.618457788846438,
      longitude: 75.60799597733192,
    },
    suggestedRadius: 85,
    isOwned: false,
    centerCoordinates: [75.60799597733192, 22.618457788846438],
    placeId: "dea4fafe-f7c7-470a-a845-6ee818fb6100",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Siena Engineering Pvt Ltd",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "Mhow-Ghatabillod Rd, Pithampur Industrial Area, Madhya Pradesh 454775, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 22.618457788846438,
      longitude: 75.60799597733192,
    },
    suggestedRadius: 85,
    isOwned: false,
    centerCoordinates: [75.60799597733192, 22.618457788846438],
    placeId: "b6e32e9b-22c1-40da-bbe4-66d97fcecfc0",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Siena Engineering Pvt Ltd",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "Benar Rd, Jhotwara Industrial Area, Dahar Ka Balaji, Jaipur, Rajasthan 302012, India",
    accessibility: "public",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 26.960834683942732,
      longitude: 75.75121520529078,
    },
    suggestedRadius: 213,
    isOwned: false,
    centerCoordinates: [75.75121520529078, 26.960834683942732],
    placeId: "4448e77a-6d4d-4f23-aa2a-3ab52e31a901",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Shilpa Alloys Private Limited",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "SRCL Rd, Burn's Colony, Salem, Tamil Nadu 636302, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 11.692702353496932,
      longitude: 78.10011047948072,
    },
    suggestedRadius: 100,
    isOwned: false,
    centerCoordinates: [78.10011047948072, 11.692702353496932],
    placeId: "4ed1b36b-fcf0-4c26-83d3-d1191b5dbf18",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Sail Refractory Company Ltd.",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "MIDC Rd, Taloja, Navi Mumbai, Maharashtra 410208, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 19.059618188550445,
      longitude: 73.11345577239992,
    },
    suggestedRadius: 112,
    isOwned: false,
    centerCoordinates: [73.11345577239992, 19.059618188550445],
    placeId: "3df6972c-d883-4b55-b8f7-cd2d72ffa57a",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "SMITHERS OASIS INDIA PVT LTD",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Koneti Rajupalem, Andhra Pradesh, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 13.917966656146175,
      longitude: 79.81494828818484,
    },
    suggestedRadius: 116,
    isOwned: false,
    centerCoordinates: [79.81494828818484, 13.917966656146175],
    placeId: "fe259563-5d67-49e2-9070-42ea9aac228f",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "SMARCO INDUSTRIES PRIVATE LIMITED",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "Unnamed Road, Heavy Industrial Area Hathkhoj, Hathkhoj, Bhilai, Chhattisgarh 490024, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 21.231504733579794,
      longitude: 81.40021293612979,
    },
    suggestedRadius: 119,
    isOwned: false,
    centerCoordinates: [81.40021293612979, 21.231504733579794],
    placeId: "5b903565-8f1d-4bcb-8288-ea7ecda3d0db",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "SHIVALIK ENGINEERING INDUSTRIES LTD",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "NH334, Haridwar, Uttarakhand 249402, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 29.92344,
      longitude: 78.07975,
    },
    suggestedRadius: 161,
    isOwned: false,
    centerCoordinates: [78.07975, 29.92344],
    placeId: "ff56243c-a9ab-4158-bd5d-c7d5fe1ef570",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "SATGURU ROADWAYS",
    state: null,
    category: "Fleet Office",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Trichy - Melur Road, Velur, Tamil Nadu 621316, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 10.625917411617921,
      longitude: 78.56162310783158,
    },
    suggestedRadius: 340,
    isOwned: false,
    centerCoordinates: [78.56162310783158, 10.625917411617921],
    placeId: "15022ce8-be7b-4239-ae3b-c17524c0b035",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "SANMAR MATRIX METALS LIMITED",
    state: null,
    category: "Manufacturing Plant/Factory/Yard",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "Pragati Nagar , Risali, near Chhaya Garden, Bhilai, Chhattisgarh 490006, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 21.15875103312389,
      longitude: 81.35358206966852,
    },
    suggestedRadius: 127,
    isOwned: false,
    centerCoordinates: [81.35358206966852, 21.15875103312389],
    placeId: "e803e0ce-940c-4574-8926-401677096489",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "SAIL REFACTORY UNIT BHILAI",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Sohna Rd, Bhiwadi, Haryana 301019, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 28.21466394159875,
      longitude: 76.84613853452845,
    },
    suggestedRadius: 90,
    isOwned: false,
    centerCoordinates: [76.84613853452845, 28.21466394159875],
    placeId: "cd12c60d-992a-4a58-83c6-d69cdce01ef8",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "RHI MAGNESITA INDIA LIMITED",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Bhiwadi-Akera Rd, Haryana 123106, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 28.217658568190675,
      longitude: 76.83889392160222,
    },
    suggestedRadius: 108,
    isOwned: false,
    centerCoordinates: [76.83889392160222, 28.217658568190675],
    placeId: "4588ea47-4f2f-48af-81ca-7da6bde64ca9",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "REVENT METALCAST LIMITED",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "Pallvika Nursery Sidcul Rd, Dadpur Govindpur, Uttarakhand 249403, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 29.93384,
      longitude: 78.04833,
    },
    suggestedRadius: 190,
    isOwned: false,
    centerCoordinates: [78.04833, 29.93384],
    placeId: "c3c1d452-b26b-4f53-93f9-7d706f78922c",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "RAMA LOGISTICS",
    state: null,
    category: "Fleet Office",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Bhunava, Gujarat 360311, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 22.05532,
      longitude: 70.76206,
    },
    suggestedRadius: 197,
    isOwned: false,
    centerCoordinates: [70.76206, 22.05532],
    placeId: "533e0247-1ccf-4263-afe7-7fd71d6a579d",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "R M TECHNOCAST",
    state: null,
    category: "Manufacturing Plant/Factory/Yard",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "Vatsaly Chowk Kothariya Ring Rd, Vavdi, Rajkot, Gujarat 360004, India",
    accessibility: "public",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 22.238389149281897,
      longitude: 70.79845193031667,
    },
    suggestedRadius: 159,
    isOwned: false,
    centerCoordinates: [70.79845193031667, 22.238389149281897],
    placeId: "60b64553-7426-4692-95f9-e5a76e484886",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Prashant Castech Pvt. Ltd.",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "S-462, S Cluster, Shivalik Nagar, Haridwar, Uttarakhand 249403, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 29.93574,
      longitude: 78.07303,
    },
    suggestedRadius: 500,
    isOwned: false,
    centerCoordinates: [78.07303, 29.93574],
    placeId: "cf0908e9-4741-4ad8-89d5-d7967a07b7d7",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Prakash Parcel service",
    state: null,
    category: "Fleet Office",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "Garhshankar - Nangal Rd, Bathu Bathri Industrial Area, Himachal Pradesh 174301, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 31.32014,
      longitude: 76.2906,
    },
    suggestedRadius: 202,
    isOwned: false,
    centerCoordinates: [76.2906, 31.32014],
    placeId: "a72eda68-13df-4760-bcba-b29d1f279733",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "PRITIKA AUTO INDUTRIES LTD UNIT -2",
    state: null,
    category: "Manufacturing Plant/Factory/Yard",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Haibatpur, Punjab, 140507, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 30.6047157758241,
      longitude: 76.8606464904157,
    },
    suggestedRadius: 227,
    isOwned: false,
    centerCoordinates: [76.8606464904157, 30.6047157758241],
    placeId: "fab494e7-d252-42a8-ba70-ef761f65701b",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "PRITIKA AUTO INDUSTRIES LTD UNIT -1",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "Bangalore - Shivamogga Rd, Navilebasavapura, Karnataka 577301, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 13.872163782600548,
      longitude: 75.65263875902382,
    },
    suggestedRadius: 269,
    isOwned: false,
    centerCoordinates: [75.65263875902382, 13.872163782600548],
    placeId: "2a92739f-5a39-4d95-8edb-f8231df3262d",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "PRAGATHI STEEL CASTINGS",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "80 Feet Rd, Bharat Nagar, GIDC, Rajkot, Gujarat 360003, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 22.28208766231892,
      longitude: 70.82986056804658,
    },
    suggestedRadius: 151,
    isOwned: false,
    centerCoordinates: [70.82986056804658, 22.28208766231892],
    placeId: "e51f010f-f028-4bc5-bdea-ad16ae27989d",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "PRABHUKRUPA INDUSTRIES",
    state: null,
    category: "Manufacturing Plant/Factory/Yard",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "Roorkee - Haridwar Rd, Gyan Lok Colony, Mayapur, Haridwar, Uttarakhand 249408, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 29.93389,
      longitude: 78.13478,
    },
    suggestedRadius: 500,
    isOwned: false,
    centerCoordinates: [78.13478, 29.93389],
    placeId: "f22b22f5-516b-408d-a3eb-203404ca99f3",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "PCC LOGISTICS PVT. LTD.",
    state: null,
    category: "Fleet Office",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Defence Residential Area, Eddumailaram, Telangana, 502329, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 17.506265863406394,
      longitude: 78.13417017940198,
    },
    suggestedRadius: 94,
    isOwned: false,
    centerCoordinates: [78.13417017940198, 17.506265863406394],
    placeId: "5ba5fc94-81ec-4e4b-b023-bfa95db48945",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Ordnance Factory Medak",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "SH 2, Pashimpara Village, Milki Badamtola, Dakshin Rajyadharpur, West Bengal 712203, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 22.747778028537947,
      longitude: 88.31904889289629,
    },
    suggestedRadius: 187,
    isOwned: false,
    centerCoordinates: [88.31904889289629, 22.747778028537947],
    placeId: "913c741d-e8e9-4ac6-9eea-322d08f736ab",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "NIPHA EXPORTS PVT.LTD. & INDUSTRIES LTD.",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "5/59, G.S.T Main Rd, Peramanur, Singaperumal Koil, Tamil Nadu 603204, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 12.78924499501972,
      longitude: 80.02329289202834,
    },
    suggestedRadius: 100,
    isOwned: false,
    centerCoordinates: [80.02329289202834, 12.78924499501972],
    placeId: "d1526854-e850-420b-af85-f0bdc990bf75",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "NIKKI INDIA FUEL SYSTEMS PRIVATE LIMITED",
    state: null,
    category: "Manufacturing Plant/Factory/Yard",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "Shri Aurobindo Niwas Greens, Dandia Bazar, Jambubet, Vadodara, Gujarat 390001, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 22.30902,
      longitude: 73.19525,
    },
    suggestedRadius: 204,
    isOwned: false,
    centerCoordinates: [73.19525, 22.30902],
    placeId: "b2dd86fa-f352-4e02-bb91-f3ec282049a9",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Metso Outotec India Private Limited",
    state: null,
    category: "Manufacturing Plant/Factory/Yard",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "#247A, RK Rd, Transport Nagar, Industrial Area- A, Ludhiana, Punjab 141008, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 30.901545491751836,
      longitude: 75.8753539640516,
    },
    suggestedRadius: 46,
    isOwned: false,
    centerCoordinates: [75.8753539640516, 30.901545491751836],
    placeId: "26cbe611-e865-42b5-8d3e-bf4a12151f76",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Mayank enterprise",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Delhi Rohtak Corridor, Asoda Todran, Haryana 124505, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 28.735476578490626,
      longitude: 76.83381373023956,
    },
    suggestedRadius: 113,
    isOwned: false,
    centerCoordinates: [76.83381373023956, 28.735476578490626],
    placeId: "cf986d6a-033a-47d0-b639-c39e77fa7c8c",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Masu Brakes Pvt Ltd.",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Kurali Chandigarh Rd, Punjab 140110, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 30.83485,
      longitude: 76.66456,
    },
    suggestedRadius: 500,
    isOwned: false,
    centerCoordinates: [76.66456, 30.83485],
    placeId: "ce516f17-8899-4a07-9e80-042b40de1ef3",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Mahindra & Mahindra Ltd.",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Kotda Sangani Taluka, Rajkot, Gujarat, 360024, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 22.14615,
      longitude: 70.82285,
    },
    suggestedRadius: 220,
    isOwned: false,
    centerCoordinates: [70.82285, 22.14615],
    placeId: "db4145d8-db44-46f3-a773-d4e90e53166b",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Macro International Co.",
    state: null,
    category: "Manufacturing Plant/Factory/Yard",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "Srinagar - Kanyakumari Hwy, Sector 59, Faridabad, Haryana 121004, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 28.30192238722771,
      longitude: 77.30332373933442,
    },
    suggestedRadius: 145,
    isOwned: false,
    centerCoordinates: [77.30332373933442, 28.30192238722771],
    placeId: "a68b7756-461e-4926-92ba-c02b9ee3c932",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "MM CASTING PVT.LTD",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Lodhika Taluka, Rajkot, Gujarat, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 22.145664455395497,
      longitude: 70.72207333362239,
    },
    suggestedRadius: 202,
    isOwned: false,
    centerCoordinates: [70.72207333362239, 22.145664455395497],
    placeId: "73f2b105-ad23-4043-b41f-7e07ebe0e5d8",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "MIRACLE FERROCAST PVT.LTD",
    state: null,
    category: "Manufacturing Plant/Factory/Yard",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "67 Park Street,, Kolkata, West Bengal 700016, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 22.54894,
      longitude: 88.35954,
    },
    suggestedRadius: 135,
    isOwned: false,
    centerCoordinates: [88.35954, 22.54894],
    placeId: "0dfd9f79-8c68-4d84-b7ef-58bff900c19a",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "MELBROW ENGINEERING WORKS PVT. LTD.",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "undefined, Gujarat, 387120, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 22.866370538887335,
      longitude: 72.61265527646657,
    },
    suggestedRadius: 100,
    isOwned: false,
    centerCoordinates: [72.61265527646657, 22.866370538887335],
    placeId: "2faea59c-b4de-4e95-85a9-8f1848d91d3c",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "MEET INDUSTRIES",
    state: null,
    category: "Manufacturing Plant/Factory/Yard",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "Kagal MIDC Rd, Kagal 5 Star MIDC Industrial Area, Talandage, Maharashtra 416236, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 16.61327,
      longitude: 74.35989,
    },
    suggestedRadius: 166,
    isOwned: false,
    centerCoordinates: [74.35989, 16.61327],
    placeId: "19cfc567-8667-43ed-ae18-29976c4310c7",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Kasturi Foundry Pvt. Ltd (Unit 1)",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "Lal Dwara Rd, Model Colony, Basant Nagar, Yamuna Nagar, Haryana 135106, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 30.135867527777073,
      longitude: 77.30317355162927,
    },
    suggestedRadius: 94,
    isOwned: false,
    centerCoordinates: [77.30317355162927, 30.135867527777073],
    placeId: "7e5aa7fc-ebcf-4877-93c7-493aa2704e55",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Kamal Encon Industries Ltd.",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Rd H, Metoda, Gujarat 360021, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 22.23374,
      longitude: 70.68665,
    },
    suggestedRadius: 210,
    isOwned: false,
    centerCoordinates: [70.68665, 22.23374],
    placeId: "bc479d57-38c2-4af7-bc4b-30739bc40a1c",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "KOTECHA STEEL FORGE & CAST INDUSTRIES",
    state: null,
    category: "Manufacturing Plant/Factory/Yard",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "145, Hotgi Rd, Airport Area, Shankar Nagar, Solapur, Maharashtra 413224, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 17.61950307735009,
      longitude: 75.93491434766828,
    },
    suggestedRadius: 176,
    isOwned: false,
    centerCoordinates: [75.93491434766828, 17.61950307735009],
    placeId: "8b43de1d-ccaf-4fb4-9971-c3b359339b1c",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "KIRLOSKAR SOLAPUR",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "SH6, Keota, Bandel, West Bengal 712502, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 22.93598,
      longitude: 88.38708,
    },
    suggestedRadius: 274,
    isOwned: false,
    centerCoordinates: [88.38708, 22.93598],
    placeId: "5d5b13dd-dd7e-4dc8-9356-0007cf30db92",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Jupiter Wagons Limited",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Unnamed Road, Gujarat 370415, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 22.88792798656609,
      longitude: 69.66690301184799,
    },
    suggestedRadius: 100,
    isOwned: false,
    centerCoordinates: [69.66690301184799, 22.88792798656609],
    placeId: "c2ae03e4-b754-44f8-9c1d-921272a90d60",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Jindal Saw Limited IPU",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "MR 10 Toll Booth, Indore, Madhya Pradesh 452003, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 22.76653323163392,
      longitude: 75.85220665270741,
    },
    suggestedRadius: 80,
    isOwned: false,
    centerCoordinates: [75.85220665270741, 22.76653323163392],
    placeId: "51474b17-9321-40a9-8978-8e61b5a4d43d",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Jash Engineering Ltd",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Unnamed Road, Punjab 140501, India",
    accessibility: "public",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 30.45268438292562,
      longitude: 76.80010601721735,
    },
    suggestedRadius: 266,
    isOwned: false,
    centerCoordinates: [76.80010601721735, 30.45268438292562],
    placeId: "7a455477-09a5-4ad8-b20c-633f1c522f9b",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Jagdev Engineering Solutions Pvt. Ltd.",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Bhavani Rd, Maharashtra 413211, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 18.04449,
      longitude: 75.22228,
    },
    suggestedRadius: 102,
    isOwned: false,
    centerCoordinates: [75.22228, 18.04449],
    placeId: "ae2d1e47-13c1-4523-b20a-73465e7aacb0",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "JINDAL SAW LIMITED",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Atta - Bilaspur Rd, Haryana 135001, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 30.07293799809841,
      longitude: 77.19903944786302,
    },
    suggestedRadius: 169,
    isOwned: false,
    centerCoordinates: [77.19903944786302, 30.07293799809841],
    placeId: "d062fe90-b059-4b7e-aabc-19f49d2f48ab",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "ISGEC Heavy Engineering Limited ( Haryana)",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },

  {
    hubId: null,
    boundary: null,
    address: "357, Sankarda - Bhadarva Rd, Raniya, Gujarat 391780, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 22.491801337575446,
      longitude: 73.12459231275389,
    },
    suggestedRadius: 161,
    isOwned: false,
    centerCoordinates: [73.12459231275389, 22.491801337575446],
    placeId: "cc535d1a-304e-4b7d-b16d-84961461d244",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Global Exportech LLP",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Unnamed Road, Haridwar, Uttarakhand 249402, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 29.91977,
      longitude: 78.04095,
    },
    suggestedRadius: 292,
    isOwned: false,
    centerCoordinates: [78.04095, 29.91977],
    placeId: "58d951e2-d9cc-408c-96af-2367cf40c794",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Garg Transport Service",
    state: null,
    category: "Fleet Office",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "Unnamed Road, Integrated Industrial Estate, Haridwar,, Sector 11, BHEL Township, Haridwar, Uttarakhand 249403, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 29.96609809709204,
      longitude: 78.07574630493974,
    },
    suggestedRadius: 500,
    isOwned: false,
    centerCoordinates: [78.07574630493974, 29.96609809709204],
    placeId: "53d92b98-0a10-439e-8b46-0eb6954c0310",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Forace Speciality Chem Private Limited Unit 2",
    state: null,
    category: "Manufacturing Plant/Factory/Yard",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "1, Vivek Vihar Colony, Ranipur More, Haridwar, Uttarakhand 249407, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 29.943267881832615,
      longitude: 78.14243138120594,
    },
    suggestedRadius: 500,
    isOwned: false,
    centerCoordinates: [78.14243138120594, 29.943267881832615],
    placeId: "bf8c2a92-17ae-4e09-9095-1371d90e1e3b",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Forace Speciality Chem Private Limited Unit 1",
    state: null,
    category: "Manufacturing Plant/Factory/Yard",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Unnamed Road, Bahadarabad, Uttarakhand 249402, India",
    accessibility: "public",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 29.919558374370858,
      longitude: 78.04092032834541,
    },
    suggestedRadius: 500,
    isOwned: false,
    centerCoordinates: [78.04092032834541, 29.919558374370858],
    placeId: "9a6e491c-b81f-4baf-97fe-7c52f94eef82",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "FORACE POLYMERS",
    state: null,
    category: "Manufacturing Plant/Factory/Yard",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Delhi Rohtak Corridor, MIE Part-A, Delhi, 124507, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 28.69137,
      longitude: 76.9541,
    },
    suggestedRadius: 123,
    isOwned: false,
    centerCoordinates: [76.9541, 28.69137],
    placeId: "318a0493-ca5b-452a-9e4c-030746a6728d",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Dawn International",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "MIDC Rd, Dongrepada, Taloja, Navi Mumbai, Maharashtra 410208, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 19.080420746390693,
      longitude: 73.14396856964954,
    },
    suggestedRadius: 108,
    isOwned: false,
    centerCoordinates: [73.14396856964954, 19.080420746390693],
    placeId: "f1688598-3224-4b43-93dd-38e69dcb80fb",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "COLD STAR LOGISTICS",
    state: null,
    category: "Fleet Office",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "S-462, S Cluster, Shivalik Nagar, Haridwar, Uttarakhand 249403, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 29.92986,
      longitude: 78.07609,
    },
    suggestedRadius: 102,
    isOwned: false,
    centerCoordinates: [78.07609, 29.92986],
    placeId: "2d90ca93-85fa-433e-8c8f-03690ec595cc",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "CJ DARCL LOGISTICS LIMITED",
    state: null,
    category: "Fleet Office",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "10/ETH, Sector 6, BHEL Township, Haridwar, Uttarakhand 249403, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 29.94328,
      longitude: 78.07041,
    },
    suggestedRadius: 499,
    isOwned: false,
    centerCoordinates: [78.07041, 29.94328],
    placeId: "974b87ea-9286-4fc8-9b2a-1c9d19961f94",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "CCI LOGISTICS LTD",
    state: null,
    category: "Fleet Office",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Unnamed Road, Hathkhoj, Bhilai, Chhattisgarh 490024, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 21.22845,
      longitude: 81.39727,
    },
    suggestedRadius: 268,
    isOwned: false,
    centerCoordinates: [81.39727, 21.22845],
    placeId: "89a71195-fb58-408b-8e46-e311aa9d9062",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Bhilai Engg. Corporation Ltd.",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "d 80, Focal Point, Mandi Gobindgarh, Punjab 147301, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 30.64407594104184,
      longitude: 76.3001668477233,
    },
    suggestedRadius: 140,
    isOwned: false,
    centerCoordinates: [76.3001668477233, 30.64407594104184],
    placeId: "a72cefd6-362b-4fdb-92a3-a84281fabc86",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Bhawani Industries Private Limited",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "SH 163, Kallapalayam, Tamil Nadu 641016, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 10.93766,
      longitude: 77.05871,
    },
    suggestedRadius: 222,
    isOwned: false,
    centerCoordinates: [77.05871, 10.93766],
    placeId: "3d0a83f0-6b2b-4365-b75c-ffc7c7dfd50f",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "BRADKEN INDIA PRIVATE LIMITED",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "Plot No. 23, Survey No. 39A, Part 12 & 13 Main Land, Shop no. 2, Kathivakkam High Road, Ashok Leyland Area, Ennore, Chennai, Tamil Nadu 600057, India",
    accessibility: "public",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 13.21017,
      longitude: 80.31677,
    },
    suggestedRadius: 140,
    isOwned: false,
    centerCoordinates: [80.31677, 13.21017],
    placeId: "b64e2ea6-c807-4c8c-bcd3-cda7ca813970",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Ashok Leyland Ltd.",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "SH 54, Machhe Industrial Area, Machhe, Belgaum, Karnataka 590014, India",
    accessibility: "public",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 15.791283250358934,
      longitude: 74.47548152152788,
    },
    suggestedRadius: 177,
    isOwned: false,
    centerCoordinates: [74.47548152152788, 15.791283250358934],
    placeId: "0fd08869-b949-4a6c-985e-f3dadc59c421",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Ashok Iron Works Pvt Ltd. Plant - 2",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address: "Pedestrian Overpass, Sector 25, Faridabad, Haryana 121004, India",
    accessibility: "public",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 28.33735,
      longitude: 77.30367,
    },
    suggestedRadius: 232,
    isOwned: false,
    centerCoordinates: [77.30367, 28.33735],
    placeId: "2ee781b8-c745-4b29-b3d7-62b30d4214e3",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "Amar Udyog",
    state: null,
    category: "Manufacturing Plant/Factory/Yard",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "StreetNo 6 Anil Building Pipal Wali Gali 26 Gurugram Haryana 122051 IN, Mata Wali Gali, Dundahera Village, Sector 20, Gurugram, Haryana 122051, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 28.37953589294758,
      longitude: 76.88587544927881,
    },
    suggestedRadius: 163,
    isOwned: false,
    centerCoordinates: [76.88587544927881, 28.37953589294758],
    placeId: "c49bdc2c-4def-4ee5-9952-737836df71ba",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "ASK FRAS-LE FRICTION PRIVATE LIMITED",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "18, Mehrauli-Gurgaon Rd, Heritage City, Sector 25, Gurugram, Haryana 122022, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 28.48607,
      longitude: 77.08968,
    },
    suggestedRadius: 241,
    isOwned: false,
    centerCoordinates: [77.08968, 28.48607],
    placeId: "1a371e6f-6d8a-497d-9262-62b947f7440a",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "ALPS Logistics Ltd",
    state: null,
    category: "Fleet Office",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "87, Abhinandan Estate, Odhav Industrial Estate, Odhav, Ahmedabad, Gujarat 382418, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 23.02198,
      longitude: 72.67748,
    },
    suggestedRadius: 100,
    isOwned: false,
    centerCoordinates: [72.67748, 23.02198],
    placeId: "eca03628-a384-4253-9a5f-c5a45fe9b0aa",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "AIA ENGINEERING UNIT- 12",
    state: null,
    category: "Manufacturing Plant/Factory/Yard",
    subDistrict: null,
    controllingBranchId: null,
  },
  {
    hubId: null,
    boundary: null,
    address:
      "251, Narwal Sanwer Rd, Sector C, Sanwer Road Industrial Area, Indore, Madhya Pradesh 452015, India",
    accessibility: "private",
    addedBy: "11a39d2f-1485-4010-bf96-69e9fdcde203",
    center: {
      latitude: 22.766509633244997,
      longitude: 75.85220642207744,
    },
    suggestedRadius: 86,
    isOwned: false,
    centerCoordinates: [75.85220642207744, 22.766509633244997],
    placeId: "1f7b75c9-ef96-4348-bc26-8515b97e4345",
    geoJsonBoundry: null,
    externalId: null,
    source: "FRETRON",
    places: null,
    viewport: null,
    district: null,
    name: "22.76653036442637, 75.85219971082194",
    state: null,
    category: "Unloading Point",
    subDistrict: null,
    controllingBranchId: null,
  },
];

async function main() {
  try {
    const foracePolymers = placeMaster.find(
      (place) => place.name === "FORACE POLYMERS"
    );
    
    const remainingPlaces = placeMaster.filter(
      (place) => place.name !== "FORACE POLYMERS"
    );
    const vehicles = vehicleMaster;
    
    const randomDestinations = getRandomSubset(remainingPlaces, 2);
    for (const vehicle of vehicles) {
      const vehicleRegistrationNumber =
        vehicle.vehicle.vehicleRegistrationNumber;
      console.log(`Vehicle- ${vehicleRegistrationNumber}`);
       const shipments = [];

      // Case 1: Origin = FORACE POLYMERS, Destination = Random (excluding origin)
      
      shipments.push({
        shipment: {
          shipmentNumber: null,
          shipmentDate: shipmentDate,
          shipmentStages: [
            {
              hub: null,
              stageName: null,
              consignmentPickUps: null,
              tripPoint: {
                purpose: "Pickup",
              },
              place: foracePolymers,
            },
            {
              hub: null,
              stageName: null,
              consignmentPickUps: null,
              tripPoint: {
                purpose: "Delivery",
              },
              place: randomDestinations[0],
            },
          ],
          fleetInfo: {
            device: null,
            lbsNumber: null,
            trackingMode: "MANUAL",
            vehicle: vehicle.vehicle,
            fleetOwner: null,
            fleetType: "Owned",
            forwardingAgent: null,
          },
          edd: null,
          shipmentStatus: "Planned",
          transportationMode: "ByRoad",
          shipmentType: "DirectLeg",
          customFields: [
            {
              fieldKey: "TOUR NO",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "INWARD INCOME RECD",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "TRANSPORTER NAME",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "Diesel price",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "OUTRATE PER KG",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "INRATE PER KG",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "DA",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "TOLL",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "REPAIR",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "CHALLAN",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "LOADING/UNLOADING",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "FASTAG TOLL",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
          ],
          uuid: null,
          branch: null,
          originalEdd: null,
          routeId: null,
        },
        consignments: [],
      });

      shipmentDate += 24 * 60 * 60 * 1000;

      // Case 2: Origin = Random (same as orgin of case 1), Destination = FORACE POLYMERS

      shipments.push({
        shipment: {
          shipmentNumber: null,
          shipmentDate: shipmentDate,
          shipmentStages: [
            {
              hub: null,
              stageName: null,
              consignmentPickUps: null,
              tripPoint: {
                purpose: "Pickup",
              },
              place: randomDestinations[0],
            },
            {
              hub: null,
              stageName: null,
              consignmentPickUps: null,
              tripPoint: {
                purpose: "Delivery",
              },
              place: foracePolymers,
            },
          ],
          fleetInfo: {
            device: null,
            lbsNumber: null,
            trackingMode: "MANUAL",
            vehicle: vehicle.vehicle,
            fleetOwner: null,
            fleetType: "Owned",
            forwardingAgent: null,
          },
          edd: null,
          shipmentStatus: "Planned",
          transportationMode: "ByRoad",
          shipmentType: "DirectLeg",
          customFields: [
            {
              fieldKey: "TOUR NO",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "INWARD INCOME RECD",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "TRANSPORTER NAME",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "Diesel price",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "OUTRATE PER KG",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "INRATE PER KG",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "DA",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "TOLL",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "REPAIR",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "CHALLAN",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "LOADING/UNLOADING",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "FASTAG TOLL",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
          ],
          uuid: null,
          branch: null,
          originalEdd: null,
          routeId: null,
        },
        consignments: [],
      });

      shipmentDate += 24 * 60 * 60 * 1000;

      // Case 3: Origin = FORACE POLYMERS, Destination = Random two destinations (excluding origin)
      const random_Destinations = getRandomSubset(remainingPlaces, 2);

      shipments.push({
        shipment: {
          shipmentNumber: null,
          shipmentDate: shipmentDate,
          shipmentStages: [
            {
              hub: null,
              stageName: null,
              consignmentPickUps: null,
              tripPoint: {
                purpose: "Pickup",
              },
              place: foracePolymers,
            },
            {
              hub: null,
              stageName: null,
              consignmentPickUps: null,
              tripPoint: {
                purpose: "Delivery",
              },
              place: random_Destinations[0],
            },
            {
              hub: null,
              stageName: null,
              consignmentPickUps: null,
              tripPoint: {
                purpose: "Delivery",
              },
              place: random_Destinations[1],
            },
          ],
          fleetInfo: {
            device: null,
            lbsNumber: null,
            trackingMode: "MANUAL",
            vehicle: vehicle.vehicle,
            fleetOwner: null,
            fleetType: "Owned",
            forwardingAgent: null,
          },
          edd: null,
          shipmentStatus: "Planned",
          transportationMode: "ByRoad",
          shipmentType: "DirectLeg",
          customFields: [
            {
              fieldKey: "TOUR NO",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "INWARD INCOME RECD",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "TRANSPORTER NAME",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "Diesel price",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "OUTRATE PER KG",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "INRATE PER KG",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "DA",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "TOLL",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "REPAIR",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "CHALLAN",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "LOADING/UNLOADING",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "FASTAG TOLL",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
          ],
          uuid: null,
          branch: null,
          originalEdd: null,
          routeId: null,
        },
        consignments: [],
      });

      shipmentDate += 24 * 60 * 60 * 1000;

      // Case 4: Random origin and two destinations in which one will be random and the other will be foracePolymers
      let random_Origin = getRandomSubset(remainingPlaces, 2);

      shipments.push({
        shipment: {
          shipmentNumber: null,
          shipmentDate: shipmentDate,
          shipmentStages: [
            {
              hub: null,
              stageName: null,
              consignmentPickUps: null,
              tripPoint: {
                purpose: "Pickup",
              },
              place: random_Origin[0],
            },
            {
              hub: null,
              stageName: null,
              consignmentPickUps: null,
              tripPoint: {
                purpose: "Delivery",
              },
              place: random_Origin[1],
            },
            {
              hub: null,
              stageName: null,
              consignmentPickUps: null,
              tripPoint: {
                purpose: "Delivery",
              },
              place: foracePolymers,
            },
          ],
          fleetInfo: {
            device: null,
            lbsNumber: null,
            trackingMode: "MANUAL",
            vehicle: vehicle.vehicle,
            fleetOwner: null,
            fleetType: "Owned",
            forwardingAgent: null,
          },
          edd: null,
          shipmentStatus: "Planned",
          transportationMode: "ByRoad",
          shipmentType: "DirectLeg",
          customFields: [
            {
              fieldKey: "TOUR NO",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "INWARD INCOME RECD",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "TRANSPORTER NAME",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "Diesel price",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "OUTRATE PER KG",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "INRATE PER KG",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "DA",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "TOLL",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "REPAIR",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "CHALLAN",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "LOADING/UNLOADING",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
            {
              fieldKey: "FASTAG TOLL",
              value: getRandomNumber(),
              input: "string",
              valueType: "string",
              fieldType: "text",
            },
          ],
          uuid: null,
          branch: null,
          originalEdd: null,
          routeId: null,
        },
        consignments: [],
      });

      shipmentDate += 24 * 60 * 60 * 1000;

      for (const shipment of shipments) {
        // console.log(JSON.stringify(shipment));
        let res = await createShipment(shipment, TOKEN);

        console.log(
          `Created shipment- ${res?.shipmentNumber ?? "NOT CREATED"}`
        );
      }
    }
  } catch (error) {
    console.log(`Caught Error in main function: ${error.message}`);
  }
}

function getRandomNumber(lowerRange = 1000, upperRange = 100000) {
  return _.random(lowerRange, upperRange);
}

function getRandomSubset(array, count) {
  const shuffled = array.slice();
  let i = array.length;
  let temp;
  let index;

  while (i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }

  return shuffled.slice(0, count);
}

async function createShipment(shipmentPayload, TOKEN) {
  const url = `https://apis.fretron.com/shipment/v1/shipment/with/consignments`;

  try {
    const res = await rp({
      method: "POST",
      uri: url,
      body: shipmentPayload,
      headers: {
        Authorization: TOKEN,
      },
      json: true,
    });

    console.log(`Shipment created with UUID: ${res.data.uuid}`);

    if (res.status == 200) {
      return res.data;
    } else {
      console.log(`Create Shipment api response error: ${res.error}`);
    }
  } catch (e) {
    console.log(`Caught Error in Create Shipment api: ${e.message}`);

    throw e;
  }
}

main();