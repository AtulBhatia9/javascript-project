async function ensurePod(cnId) {
    let url = `${FRT_BASE_URL}/pod/v1/action/ensure-pod?consignmentId=${cnId}`;
    try {
      let res = await rp({
        method: "GET",
        uri: url,
        headers: {
          Authorization: TOKEN,
        },
        json: true,
      });
      if (res.status == 200) {
        return res.data;
      } else {
        console.log(`Error caught in ensure pod : ${res.error}`);
      }
    } catch (e) {
      console.log(`Error caught in ensure pod : ${e.message}`);
    }
    return null;
  }