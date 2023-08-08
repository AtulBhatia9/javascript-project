const rp = require("request-promise");

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

    console.log(`Device created for IMEI: ${imei}`);
  } catch (error) {
    console.log(`Error creating device for IMEI ${imei}: ${error.message}`);
  }
}

async function main() {
  try {
    const wheelsEyeData = await getDetailsOfWheelsEye();
    // console.log(wheelsEyeData);

    if (wheelsEyeData && wheelsEyeData.length > 0) {
      const deviceNumbers = wheelsEyeData.map((vehicle) => vehicle.deviceNumber);

      const deviceMasterData = await getDeviceMaster();

      for (const deviceNumber of deviceNumbers) {
        if (!deviceMasterData) {
          console.log("Error fetching device master data.");
          break;
        }
        if (
          !deviceMasterData.find((device) => device.device.imei === deviceNumber + "_WHEELSEYE")
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
          console.log(`IMEI already present in device master: ${deviceNumber}`);
        }
      }
    } else {
      console.log("No WheelsEye data found.");
    }
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
  }
}

main();
