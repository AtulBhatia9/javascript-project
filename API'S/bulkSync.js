async function bulkSyncApi(payload) {
    // const url = `${FRT_PUB_BASE_URL}/shipment/v1/shipment/bulk/sync`;
    try {
      const res = await rp({
        method: "POST",
        uri: url,
        body: payload,
  
        headers: {
          Authorization: token,
        },
        json: true,
      });
  
      console.log(`Bulk Sync api response status: ${res.status}`);
      if (res.status == 200) {
        return res.data;
      } else {
        console.log(`Bulk Sync api response error: ${res.error}`);
      }
    } catch (e) {
      console.log(`Caught Error in Bulk Sync api: ${e.message}`);
    }
    return null;
  }

 const bulkSyncPayload = {
    shipmentId: shipmentId,
    updates: [
      {
        keyToUpdate: "customfields",
        updatedValue: [
          {
            fieldKey: "Cf which will be added",
            valueType: "string",
            fieldType: "text",
            value: Value,
          },
        ],
      },
    ],
  };
