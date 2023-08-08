async function main() {
    //   const fleetTpiData = await getDetailsOfFleetTpi();
      const wheelsEyeData = await getDetailsOfWheelsEye()
    //   console.log(wheelsEyeData);
    
      if (wheelsEyeData) {
        const deviceNumbers = wheelsEyeData.list.map(vehicle => vehicle.deviceNumber);
        for (const imei of deviceNumbers) {
          const deviceMasterData = await getDeviceMaster(imei + "_WHEELSEYE");
    
          if (!deviceMasterData) {
            console.log("Error fetching device master data.");
            break;
          }
    
          if (
            !deviceMasterData.find(
              (device) => device.device.imei === imei + "_WHEELSEYE"
            )
          ) {
            console.log(`IMEI not present in device master: ${imei}`);
    
            const payload = {
              imei: imei + "_WHEELSEYE",
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
        console.log("No WheelsEye data found.");
      }
    }
    
    main();