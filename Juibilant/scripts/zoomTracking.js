const rp = require("request-promise");

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
      `Total Devices - ${res?.data?.devices?.length ?? 0}`
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

async function main() {
  try {
    const zoomTrackingData = await getzoomTracking();
    //   console.log(zoomTrackingData);

    const deviceMasterData = await getDeviceMaster();

    // console.log(deviceMasterData[0])

    if (zoomTrackingData && zoomTrackingData.length > 0) {
      const imeiNumbers = zoomTrackingData.map((vehicle) => vehicle.Imeino);
      console.log(imeiNumbers);
      for (const imei of imeiNumbers) {
        if (!deviceMasterData) {
          console.log("Error fetching device master data.");
          break;
        }

        console.log(`IMEI - ${imei + "_zoom_tracking"}`)

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
          console.log(`IMEI already present in device master: ${imei}`);
        }
      }
    } else {
      console.log("No Zoom Tracking data found.");
    }
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
  }
}
main();
