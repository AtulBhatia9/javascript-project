async function getPlaceById(placeId) {
    let url = `${FRT_PUB_BASE_URL}/place-manager/v2/place/detail?placeId=${placeId}&source=FRETRON`
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
            console.log(`Get place by id ${placeId} error: ${res.error}`);
        }
    } catch (error) {
        console.log(`Catched error in getting place by id ${placeId} : ${error.message}`);
    }
    return null
}


// async function main() {
//     try {
//         let shipment = $event.body.actionData
//         let shipmentStages = shipment.shipmentStages ?? []
//         for (let i = 0; i < shipmentStages.length; i++) {
//             let stage = shipmentStages[i];
//             let placeName = stage.place.name;
//             let placeId = stage.place?.placeId ?? stage.hub?.placeId
//             if (!placeId) {
//                 return {
//                     "status": 400,
//                     "data": null,
//                     "error": `PlaceId is not present for place : ${placeName}`,
//                 }
//             }
//             let masterPlace = await getPlaceById(placeId)
//             if(!masterPlace){
//                 return {
//                     "status": 400,
//                     "data": null,
//                     "error": `Place ${placeName} not found in master`,
//                 }
//             }
//         }
//         return {
//             "status": 200,
//             "data": shipment,
//             "error": null
//         }
//     } catch (error) {
//         console.log(`Caught Error in main function: ${error.message}`);
//     }
// }