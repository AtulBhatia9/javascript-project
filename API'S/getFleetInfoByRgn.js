async function getFleetInfoByRnNumber(vehicleRegistrationNumber) {
    let url = `https://apis.fretron.com/partner-fleet/v2/fleet/byVehicleRn?vehicleRegistrationNumber=${vehicleRegistrationNumber}`
    try {
        let res = await rp({
            method: "GET",
            uri: url,
            headers: {
                Authorization: TOKEN
            },
            json: true
        });
        console.log(`Get fleetInfo by RnNum res status: ${res.status}`)
        if (res.status == 200) {
            return res.data
        } else {
            console.log(`Get fleetInfo by RnNum res error : ${res.error}`)
        }
    } catch (e) {
        console.log(`Catched error in getting fleetInfo by RnNum : ${e.message}`)
    }
    return null
}

// const shipmentNumber = shpObj.shipmentNumber;
//         const vehicleRegNum = shpObj.fleetInfo.vehicle?.vehicleRegistrationNumber;
//         const vehicleRegistrationNumber = vehicleRegNum?.toUpperCase().replace(/\s/g, "").trim();