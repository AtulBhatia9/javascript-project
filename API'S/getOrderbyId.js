async function getOrderById(orderId) {
    let url = `${FRT_PUB_BASE_URL}/order-manager-v2/sales-orders/v1/order/${orderId}`;
    try {
      let res = await rp({
        method: "GET",
        uri: url,
        json: true,
        headers: {
          Authorization: TOKEN,
        },
      });
      if (res.status === 200) {
        return res.data;
      } else {
        console.log(`Get Order by id ${orderId} error: ${res.error}`);
      }
    } catch (e) {
      console.log(`Get Order by id ${orderId} caught error: ${e.message}`);
    }
    return null;
  }