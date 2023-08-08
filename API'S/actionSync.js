async function bulkActionApi(payload, token) {
    // const url = `${FRT_PUB_BASE_URL}/partner-fleet/v2/bulk/actions;`;
    try {
      const res = await rp({
        method: "PUT",
        uri: url,
        body: payload,
  
        headers: {
          Authorization: token,
        },
        json: true,
      });
  
      console.log(`Bulk Action api response status: ${res.status}`);
      if (res.status == 200) {
        return res.data;
      } else {
        console.log(`Bulk Action api response error: ${res.error}`);
      }
    } catch (e) {
      console.log(`Caught Error in Bulk Action api: ${e.message}`);
    }
    return null;
  }