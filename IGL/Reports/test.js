function getRandomElement(array) {
  if (array.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const placeMaster = [
  {
    // ... (omitted for brevity)
    name: "Zircar Refractories Ltd.",
    // ...
  },
  {
    // ... (omitted for brevity)
    name: "Voestalpine VAE VKN India Pvt. Ltd.",
    // ...
  },
  {
    // ... (omitted for brevity)
    name: "Uttarakhand Gujrat Carriers",
    // ...
  },
  {
    // ... (omitted for brevity)
    name: "Uniproducts (India) Ltd.",
    // ...
  },
];

const randomPlace = getRandomElement(placeMaster);
const randomPlaceName = randomPlace ? randomPlace.name : "No places found"; // In case the array is empty

console.log(randomPlaceName);
/////////////
const foracePolymers = placeMaster.find(
  (place) => place.name === "FORACE POLYMERS"
);

const shipments = [];

// Case 1: Origin = FORACE POLYMERS, Destination = Random (excluding origin)
const randomDestination1 = placeMaster.find(
  (place) => place.name !== foracePolymers.name
);
shipments.push({ origin: foracePolymers, destination: randomDestination1 });

// Case 2: Origin = Random, Destination = FORACE POLYMERS
const randomOrigin2 = placeMaster.find(
  (place) => place.name !== foracePolymers.name
);
shipments.push({ origin: randomOrigin2, destination: foracePolymers });

// Case 3: Origin = FORACE POLYMERS, Destination = Random (excluding origin)
const randomDestinations3 = placeMaster.filter(
  (place) => place.name !== foracePolymers.name
);
shipments.push(...createShipments(foracePolymers, randomDestinations3));

// Case 4: Origin = Random (excluding origin), Destination = FORACE POLYMERS
const randomOrigins4 = placeMaster.filter(
  (place) => place.name !== foracePolymers.name
);
shipments.push(...createShipments(randomOrigins4, foracePolymers));

await createShipmentsBatch(shipments);

///////////////////////////////////////////////////////////////////////////
async function main() {
  try {
    const foracePolymers = placeMaster.find(
      (place) => place.name === "FORACE POLYMERS"
    );
    const vehicleRegistrationNumbers = vehicleMaster.map(
      (vehicle) => vehicle.vehicleRegistrationNumber
    );

    for (const vehicleRegistrationNumber of vehicleRegistrationNumbers) {
      const shipments = [];

      // Case 1: Origin = FORACE POLYMERS, Destination = Random (excluding origin)
      const randomDestination1 = placeMaster.find(
        (place) => place.name !== foracePolymers.name
      );
      shipments.push({
        origin: foracePolymers,
        destination: randomDestination1,
      });

      // Case 2: Origin = Random, Destination = FORACE POLYMERS
      const randomOrigin2 = placeMaster.find(
        (place) => place.name !== foracePolymers.name
      );
      shipments.push({ origin: randomOrigin2, destination: foracePolymers });

      // Case 3: Origin = FORACE POLYMERS, Destination = Random (excluding origin)
      const randomDestinations3 = placeMaster.filter(
        (place) => place.name !== foracePolymers.name
      );
      shipments.push(...createShipments(foracePolymers, randomDestinations3));

      // Case 4: Origin = Random (excluding origin), Destination = FORACE POLYMERS
      const randomOrigins4 = placeMaster.filter(
        (place) => place.name !== foracePolymers.name
      );
      shipments.push(...createShipments(randomOrigins4, foracePolymers));

      await createShipmentsBatch(shipments, vehicleRegistrationNumber);
    }
  } catch (error) {
    console.log(`Caught Error in main function: ${error.message}`);
  }
}

async function createShipmentsBatch(shipments, vehicleRegistrationNumber) {
  // Batch shipments into groups of maximum batch size
  const batchSize = 10; // Adjust the batch size as per your requirements
  const shipmentBatches = [];
  for (let i = 0; i < shipments.length; i += batchSize) {
    const batch = shipments.slice(i, i + batchSize);
    shipmentBatches.push(batch);
  }

  // Process shipment batches
  for (const batch of shipmentBatches) {
    const shipmentPayloads = batch.map(({ origin, destination }) => {
      return {
        // Create shipment payload using origin, destination, and vehicleRegistrationNumber
        origin,
        destination,
        vehicleRegistrationNumber,
      };
    });

    // Call the createShipments API with the shipmentPayloads
    await createShipments(shipmentPayloads);
  }
}

async function createShipments(
  origins,
  destinations,
  vehicleRegistrationNumber
) {
  const shipmentPromises = [];

  for (const origin of origins) {
    for (const destination of destinations) {
      // Create shipment payload using origin, destination, and vehicleRegistrationNumber
      const shipmentPayload = {
        origin,
        destination,
        vehicleRegistrationNumber,
      };

      // Push the createShipment promise to the array
      shipmentPromises.push(createShipment(shipmentPayload));
    }
  }

  // Wait for all shipment promises to resolve
  await Promise.all(shipmentPromises);
}

async function createShipment(shipmentPayload) {
  // Call the createShipment API with the shipmentPayload
  await createShipment(shipmentPayload, TOKEN);
}

// Call the main function to start the process
main().catch((error) => console.log(`Caught Error: ${error.message}`));
/////////////////////////////////////////////
let originStage = {
  hub: null,
  stageName: null,
  consignmentPickUps: null,
  tripPoint: {
    purpose: "Pickup",
  },
  place: foracePolymers,
};
let destinationStage = {
  hub: null,
  stageName: null,
  consignmentPickUps: null,
  tripPoint: {
    purpose: "Delivery",
  },
  place: randomDestination1,
  place: randomDestination2,
};

let arr = [
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
