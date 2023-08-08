const rp = require("request-promise");

async function getDetailsOfFleetTpi() {
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

async function getDeviceMaster() {
  const TOKEN_2 =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODkyMzk1MDEsInVzZXJJZCI6ImJvdHVzZXItLTk5ODU5ZWIwLWUzODEtNDk5OS1hODIwLWNlZGE1YjRkNmU2MiIsIm1vYmlsZU51bWJlciI6ImJvdHVzZXItLTk5ODU5ZWIwLWUzODEtNDk5OS1hODIwLWNlZGE1YjRkNmU2MiIsIm9yZ0lkIjoiNDY0ZDRlNmEtNGQ2Mi00MjlmLWE2NjAtODZhNDg4MzljN2FmIiwibmFtZSI6InN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.UrtUvQqHmDCTmw8usAIT49QfDpecWp9QJPG-oIvw0QM";

  let url = `https://apis.fretron.com/devices/v1/devices/page?limit=200&offset=0`;
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
      `Incoming response status for fetching Device Master - ${res.status}`
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
  const fleetTpiData = await getDetailsOfFleetTpi();

  if (fleetTpiData) {
    const imeiFromTpi = fleetTpiData.vehicles.map(
      (vehicle) => vehicle.otherAttributes.imei
    );
    const deviceMasterData = await getDeviceMaster();
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
        console.log(`IMEI already present in device master: ${imei}`);
      }
    }
  } else {
    console.log("No Fleet TPI data found.");
  }
}

main();
