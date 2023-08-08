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
