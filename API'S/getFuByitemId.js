async function getFuByItemId(freightUnitLineItemId) {
    let url = `${FRT_PUB_BASE_URL}/order-manager-v2/freight-units/v1/freight-units/by/linItemIds`;
    try {
      let res = await rp({
        method: "POST",
        uri: url,
        body: [freightUnitLineItemId],
        json: true,
        headers: {
          Authorization: TOKEN,
        },
      });
      if (res.status === 200) {
        return res.data;
      } else {
        console.log(`Get Freight Unit by item id ${freightUnitLineItemId} error: ${res.error}`);
      }
    } catch (e) {
      console.log(`Get Freight Unit by id ${freightUnitLineItemId} caught error: ${e.message}`);
    }
    return null;
  }