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

    console
      .log
      //   `Incoming response status for fetching Device Master - ${res.status}`
      ();

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
    if (res?.status == 200) {
      console.log(`Device created for IMEI: ${imei}`);
    } else {
      console.log(`res error ${res.error}`);
    }
  } catch (error) {
    console.log(`Error creating device for IMEI ${imei}: ${error.message}`);
  }
}

async function main() {
  try {
    let imeiNumbers = [];
    
    for (const data of user_pass_data) {
      const { Company, "User Name": userName, Password } = data;
      const res = await getLiveDataForAditiTracking(Company, userName, Password);

      if (res && res.root && res.root.VehicleData) {
        const vehicles = res.root.VehicleData;
        const imeis = vehicles.map((vehicle) => vehicle.Imeino);
        imeiNumbers.push(...imeis);
      }
    }

    console.log(imeiNumbers.length);

    for (let imei of imeiNumbers) {
      const deviceMasterData = await getDeviceMaster();
      if (!deviceMasterData) {
        console.log("Error fetching device master data.");
        break;
      }

      let checkImei = imei + "_aditi_tracking";
      console.log(checkImei);
      if (!deviceMasterData.find((device) => device.device.imei === checkImei)) {
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
        console.log(`Device already exists: ${imei}`);
      }
    }
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
  }
}

main();