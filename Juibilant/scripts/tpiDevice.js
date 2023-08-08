const rp = require("request-promise");
const _ = require("lodash");

const user_pass_data = [
  {
    "Sr.No": 1,
    Company: "AGGARWAL ROAD CARRIER",
    "User Name": "aggarwalrc",
    Password: "123456@",
  },
  {
    "Sr.No": 2,
    Company: "AMRITPAL ROADLINES",
    "User Name": "amritpalroadlines",
    Password: "amritpal@123",
  },
  {
    "Sr.No": 3,
    Company: "BBC LOGISTICS",
    "User Name": "BBC",
    Password: "123456",
  },
  {
    "Sr.No": 4,
    Company: "B.S.CARRIERS / Harjug Logistics",
    "User Name": "bscarriers",
    Password: "123456",
  },
  {
    "Sr.No": 5,
    Company: "G.k Logistics",
    "User Name": "gklogistics",
    Password: "123456",
  },
  {
    "Sr.No": 6,
    Company: "KALRA ROADLINES",
    "User Name": "kalra",
    Password: "123456",
  },
  {
    "Sr.No": 7,
    Company: "Karveer",
    "User Name": "karveer",
    Password: "karveer@123",
  },
  {
    "Sr.No": 8,
    Company: "KHATRI ROADLINES",
    "User Name": "KHATRI",
    Password: "123456",
  },
  {
    "Sr.No": 9,
    Company: "Prashant Roadlines / Saideep Roadlines",
    "User Name": "manishroadlines",
    Password: "123456",
  },
  {
    "Sr.No": 10,
    Company: "G.k Logistics",
    "User Name": "MH04HS2115",
    Password: "MH04HS2115",
  },
  {
    "Sr.No": 11,
    Company: "VEEKAY EXPRESS / Meerut Road Carriers",
    "User Name": "mrcpvtltd",
    Password: "Mrc@123",
  },
  {
    "Sr.No": 12,
    Company: "Prashant Roadlines / Saideep Roadlines",
    "User Name": "prashant",
    Password: "123456",
  },
  {
    "Sr.No": 13,
    Company: "Progressive Transport",
    "User Name": "progressive",
    Password: "123456#abcd",
  },
  {
    "Sr.No": 14,
    Company: "Ramesh Nigde",
    "User Name": "rameshn",
    Password: "123456",
  },
  {
    "Sr.No": 15,
    Company: "RK Roadlines",
    "User Name": "rkroadlines",
    Password: "123456",
  },
  {
    "Sr.No": 16,
    Company: "SARTHAK TRANSPORT",
    "User Name": "SARTHAKTRANSPORT",
    Password: "123456",
  },
  {
    "Sr.No": 17,
    Company: "Shrikant Roadlines",
    "User Name": "Shrikant",
    Password: "1001",
  },
  {
    "Sr.No": 18,
    Company: "SOMNATH TRANSPORT",
    "User Name": "somnath",
    Password: "Somnath@123",
  },
  {
    "Sr.No": 19,
    Company: "Swami Samrth",
    "User Name": "swamisamarth",
    Password: "123456",
  },
  {
    "Sr.No": 20,
    Company: "Swami Samrth",
    "User Name": "swamisamarth2",
    Password: "123456",
  },
  {
    "Sr.No": 21,
    Company: "TIRUPATI CARRIERS",
    "User Name": "tirupaticarriers",
    Password: "123456",
  },
  {
    "Sr.No": 22,
    Company: "V N EXPRESS",
    "User Name": "vnexpress",
    Password: "123456",
  },
  {
    "Sr.No": 23,
    Company: "SAHYADHRI LOGISTICS",
    "User Name": "sahyadhrilogi",
    Password: "gps@123",
  },
];

async function getDetailsOfFleetXTpi() {
  const TOKEN_1 = "e0362192-fa46-4da4-ac09-b879790a36f2";

  try {
    const options = {
      url: "https://api.fleetx.io/api/v1/analytics/live",
      headers: {
        Authorization: "bearer " + TOKEN_1,
      },
      json: true,
    };

    const res = await rp(options);
    return res;
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
    return null;
  }
}

async function getLiveDataForAditiTracking(company, user, pass) {
  try {
    let url = `https://aditigps.com/webservice?token=getLiveData&user=${encodeURIComponent(
      user
    )}&pass=${encodeURIComponent(pass)}&format=json`;
    let res = await rp({
      uri: url,
      json: true,
    });

    return res;
  } catch (error) {
    console.log(`Error fetching live data for ${company}: ${error.message}`);
    return null;
  }
}

async function getDetailsOfWheelsEye() {
  try {
    let pageNo = 0;
    const size = 100;
    let res;
    do {
      res = await rp({
        uri: `https://api.wheelseye.com/currentLoc?accessToken=eac71823-d061-4c9a-b3fa-e05670a5072c&pageNo=${pageNo++}&size=${size}`,
        method: "GET",
        headers: {
          Authorization: "",
        },
        json: true,
      });
      if (!res?.data?.list) break;
      return res.data.list;
    } while (res.data.list.length === size);
  } catch (error) {
    console.log("GET position error: " + error.message);
  }
  return [];
}

async function getzoomTracking() {
  try {
    // Veekay Express
    const url1 =
      "http://www.zoomtracking.in/webservice?token=getLiveData&user=shaktihp&pass=123456&company=veekay express&format=json";
    // Meerut Road Carriers Pvt Ltd
    const url2 =
      "http://www.zoomtracking.in/webservice?token=getLiveData&user=bulk01&pass=amarbulk@123&company=bulk01 & format=json";
    let positions = [];

    const res1 = await rp({
      uri: url1,
      method: "GET",
      json: true,
    });

    if (res1?.root?.VehicleData) {
      positions.push(...res1.root.VehicleData);
    } else {
      console.log("Res1 : " + JSON.stringify(res1));
    }

    const res2 = await rp({
      uri: url2,
      method: "GET",
      json: true,
    });

    if (res2?.root?.VehicleData) {
      positions.push(...res2.root.VehicleData);
    } else {
      console.log("Res2 : " + JSON.stringify(res2));
    }
    return positions;
  } catch (error) {
    console.log("GET position error : " + error.message);
  }
  return [];
}

async function getDetailsOfCompassTelematics() {
  try {
    const url = `http://43.204.20.184/webservice?token=getLiveData&user=metalogixpl&pass=metalogix@2022&company=Metalogix`;
    let positions = [];

    const res = await rp({
      uri: url,
      method: "GET",
      json: true,
    });

    if (res?.root?.VehicleData) {
      positions.push(...res.root.VehicleData);
    } else {
      console.log("Invalid response structure from Compass Telematics API.");
    }

    return positions;
  } catch (error) {
    console.log("GET position error: " + error.message);
    return [];
  }
}

async function getDeviceMaster() {
  const TOKEN_2 =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODkyMzk1MDEsInVzZXJJZCI6ImJvdHVzZXItLTk5ODU5ZWIwLWUzODEtNDk5OS1hODIwLWNlZGE1YjRkNmU2MiIsIm1vYmlsZU51bWJlciI6ImJvdHVzZXItLTk5ODU5ZWIwLWUzODEtNDk5OS1hODIwLWNlZGE1YjRkNmU2MiIsIm9yZ0lkIjoiNDY0ZDRlNmEtNGQ2Mi00MjlmLWE2NjAtODZhNDg4MzljN2FmIiwibmFtZSI6InN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.UrtUvQqHmDCTmw8usAIT49QfDpecWp9QJPG-oIvw0QM";

  let url = `https://apis.fretron.com/devices/v1/devices/page?limit=1000&offset=0`;
  try {
    let res = await rp({
      method: "GET",
      uri: url,
      headers: {
        Authorization: TOKEN_2,
      },
      json: true,
    });

    console.log(
      //   `Incoming response status for fetching Device Master - ${res.status}`
      `Overall Total Devices in Master - ${res?.data?.devices?.length ?? 0}`
    );

    if (res.status === 200) {
      return res.data.devices;
    } else {
      console.log(
        `Incoming error in response for fetching Device Master - ${res.error}`
      );
      return null;
    }
  } catch (error) {
    console.log(`Some error occurred: ${error.message}`);
    return null;
  }
}

async function createDevice(payload, imei) {
  const TOKEN_2 =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODkyMzk1MDEsInVzZXJJZCI6ImJvdHVzZXItLTk5ODU5ZWIwLWUzODEtNDk5OS1hODIwLWNlZGE1YjRkNmU2MiIsIm1vYmlsZU51bWJlciI6ImJvdHVzZXItLTk5ODU5ZWIwLWUzODEtNDk5OS1hODIwLWNlZGE1YjRkNmU2MiIsIm9yZ0lkIjoiNDY0ZDRlNmEtNGQ2Mi00MjlmLWE2NjAtODZhNDg4MzljN2FmIiwibmFtZSI6InN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.UrtUvQqHmDCTmw8usAIT49QfDpecWp9QJPG-oIvw0QM";

  let url = "https://apis.fretron.com/devices/v1/device";

  try {
    let res = await rp({
      method: "POST",
      uri: url,
      headers: {
        Authorization: TOKEN_2,
      },
      body: payload,
      json: true,
    });

    if (res.status === 200) {
      console.log(`Device created for IMEI: ${imei}`);
    } else {
      console.log(`Error creating device for IMEI ${imei}: ${res.error}`);
    }
  } catch (error) {
    console.log(`Error creating device for IMEI ${imei}: ${error.message}`);
  }
}

async function mainForFleetXTpi() {
  const fleetTpiData = await getDetailsOfFleetXTpi();

  if (fleetTpiData) {
    const imeiFromTpi = fleetTpiData.vehicles.map(
      (vehicle) => vehicle.otherAttributes.imei
    );
    console.log(`Total No of Imei Number in TPI for Fleet_X_Tpi: ${imeiFromTpi.length}`);
    const deviceMasterData = await getDeviceMaster();
    let count = 0 ;
    for (const imei of imeiFromTpi) {
      if (!deviceMasterData) {
        console.log("Error fetching device master data.");
        break;
      }
      if (
        !deviceMasterData.find(
          (device) => device.device.imei === imei + "_fleetx_JI"
        )
      ) {
        console.log(`IMEI not present in device master: ${imei}`);

        const payload = {
          imei: imei + "_fleetx_JI",
          mobileNumber: null,
          manufacturerName: null,
          usedBy: null,
          uuid: null,
          attachedResourceId: null,
          attachedResourceNumber: null,
          branch: null,
          serviceProvider: null,
          type: "VIRTUAL",
        };
        // console.log(payload);
        // await createDevice(payload, imei);
        // break;
      } else {
        count += 1;
        console.log(`IMEI already present in device master: ${imei}`);
      }
    }
    console.log(`No of Devices of Fleet_X_Tpi in Master: ${count}`);
  } else {
    console.log("No Fleet TPI data found.");
  }
}

async function mainForAditiTracking() {
  try {
    let imeiNumbers = [];

    for (const data of user_pass_data) {
      const { Company, "User Name": userName, Password } = data;
      const res = await getLiveDataForAditiTracking(
        Company,
        userName,
        Password
      );

      if (res && res.root && res.root.VehicleData) {
        const vehicles = res.root.VehicleData;
        const imeis = vehicles.map((vehicle) => vehicle.Imeino);
        imeiNumbers.push(...imeis);
      }
    }

    console.log(`Total No of Imei Number in TPI for Aditi Tracking: ${imeiNumbers.length}`);
    let count = 0;

    for (let imei of imeiNumbers) {
      const deviceMasterData = await getDeviceMaster();
      if (!deviceMasterData) {
        console.log("Error fetching device master data.");
        break;
      }

      let checkImei = imei + "_aditi_tracking";
      console.log(checkImei);
      if (
        !deviceMasterData.find((device) => device.device.imei === checkImei)
      ) {
        console.log(`IMEI not present in device master: ${checkImei}`);

        const payload = {
          imei: imei + "_aditi_tracking",
          mobileNumber: null,
          manufacturerName: null,
          usedBy: null,
          uuid: null,
          attachedResourceId: null,
          attachedResourceNumber: null,
          branch: null,
          serviceProvider: null,
          type: "VIRTUAL",
        };
        // await createDevice(payload, imei);
        // console.log(payload);
        // break;
      } else {
        count += 1;
        console.log(`Device already exists: ${imei}`);
      }
    }
    console.log(`No of Devices of Aditi Tracking in Master: ${count}`);
  } catch (error) {
    console.log(`An error occurred in Aditi Tracking TPI: ${error.message}`);
  }
}

async function mainForWheelsEye() {
  try {
    const wheelsEyeData = await getDetailsOfWheelsEye();
    console.log(
      `Number of device numbers in TPI of WheelsEye :${wheelsEyeData.length}`
    );
    let count = 0;
    if (wheelsEyeData && wheelsEyeData.length > 0) {
      const deviceNumbers = wheelsEyeData.map(
        (vehicle) => vehicle.deviceNumber
      );

      const deviceMasterData = await getDeviceMaster();

      for (const deviceNumber of deviceNumbers) {
        if (!deviceMasterData) {
          console.log("Error fetching device master data.");
          break;
        }
        if (
          !deviceMasterData.find(
            (device) => device.device.imei === deviceNumber + "_WHEELSEYE"
          )
        ) {
          console.log(`IMEI not present in device master: ${deviceNumber}`);

          const payload = {
            imei: deviceNumber + "_WHEELSEYE",
            mobileNumber: null,
            manufacturerName: null,
            usedBy: null,
            uuid: null,
            attachedResourceId: null,
            attachedResourceNumber: null,
            branch: null,
            serviceProvider: null,
            type: "VIRTUAL",
          };

          // await createDevice(payload, deviceNumber);
          // break;
        } else {
          count += 1;
          console.log(`IMEI already present in device master: ${deviceNumber}`);
        }
      }
      console.log(`Number of Device Numbers of Wheels Eye in Master: ${count}`);
    } else {
      console.log("No WheelsEye data found.");
    }
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
  }
}

async function mainForZoomTracking() {
  try {
    const zoomTrackingData = await getzoomTracking();
    //   console.log(zoomTrackingData);

    const deviceMasterData = await getDeviceMaster();

    // console.log(deviceMasterData[0])

    if (zoomTrackingData && zoomTrackingData.length > 0) {
      const imeiNumbers = zoomTrackingData.map((vehicle) => vehicle.Imeino);
      console.log(`No of devices for Zoom Tracking in TPI :${imeiNumbers.length}`);
      let count = 0;
      for (const imei of imeiNumbers) {
        if (!deviceMasterData) {
          console.log("Error fetching device master data.");
          break;
        }

        console.log(`IMEI - ${imei + "_zoom_tracking"}`);

        if (
          !deviceMasterData.find(
            (device) => device.device.imei === `${imei}_zoom_tracking`
          )
        ) {
          console.log(`IMEI not present in device master: ${imei}`);

          const payload = {
            imei: imei + "_zoom_tracking",
            mobileNumber: null,
            manufacturerName: null,
            usedBy: null,
            uuid: null,
            attachedResourceId: null,
            attachedResourceNumber: null,
            branch: null,
            serviceProvider: null,
            type: "VIRTUAL",
          };

          // await createDevice(payload, imei);
        } else {
            count += 1;
          console.log(`IMEI already present in device master: ${imei}`);
        }
      }
      console.log(`No of Devices of Zoom Tracking in Master: ${count}`);
    } else {
      console.log("No Zoom Tracking data found.");
    }
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
  }
}

async function mainForCompassTelematics() {
  try {
    const compassTelematicsData = await getDetailsOfCompassTelematics();
    //   console.log(compassTelematicsData);

    const deviceMasterData = await getDeviceMaster();

    if (compassTelematicsData && compassTelematicsData.length > 0) {
      const imeiNumbers = compassTelematicsData.map(
        (vehicle) => vehicle.Imeino
      );
        console.log(`No of devices for Compass Telematics in TPI :${imeiNumbers.length}`);

        let count = 0;

      for (const imei of imeiNumbers) {
        if (!deviceMasterData) {
          console.log("Error fetching device master data.");
          break;
        }
        // console.log(deviceMasterData);
        let checkImei = imei + "_compass_telematics";
        console.log(checkImei);
        if (
          !deviceMasterData.find((device) => device.device.imei === checkImei)
        ) {
          console.log(`IMEI not present in device master: ${checkImei}`);

          const payload = {
            imei: imei + "_compass_telematics",
            mobileNumber: null,
            manufacturerName: null,
            usedBy: null,
            uuid: null,
            attachedResourceId: null,
            attachedResourceNumber: null,
            branch: null,
            serviceProvider: null,
            type: "VIRTUAL",
          };

          // await createDevice(payload, imei);
        } else {
            count += 1;
          console.log(`IMEI already present in device master: ${imei}`);
        }
      }
      console.log(`No of Devices of Compass Telematics in Master: ${count}`);
    } else {
      console.log("No Compass Telematics data found.");
    }
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
  }
}

async function main() {
  try {
    //   await mainForFleetXTpi();
    //   await mainForAditiTracking();
    // await mainForWheelsEye();
    // await mainForZoomTracking();
    //   await mainForCompassTelematics();
  } catch (error) {
    console.log(`Error in main: ${error.message}`);
  }
}

main();
