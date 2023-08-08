const rp = require("request-promise");
const TOKEN = `Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODkyMzExODYsInVzZXJJZCI6ImViZTU3NTFhLWEwNWItNDZiNi05MWI0LTFjMTEyYTkwZjYzOCIsImVtYWlsIjoic3V5YXNoLmt1bWFyQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTU1NTEwNzcwMCIsIm9yZ0lkIjoiNDk1Yjg3MjgtYzc2MS00ZmE3LTgzZmUtZGI3NWE3ZDYzMjIxIiwibmFtZSI6IlN1eWFzaCAiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.lhvrPpR0x373FdmXnqwrInSXbRBceX4pGVyddH3oN3w`;

async function getAuctions(from, till) {
  let url = `https://apis.fretron.com/order-manager-v2/auctions/v1/completed/auctions?limit=50&offset=0&filters={"orderDate":{"from":${from},"till":${till}}}`;

  try {
    let res = await rp({
      method: "GET",
      uri: url,
      headers: {
        Authorization: TOKEN,
      },
      json: true,
    });

    console.log(`Incoming response status - ${res.status}`);

    if (res.status === 200 && res.data && res.data.length > 0) {
      return res.data;
    } else {
      console.log(`Incoming error in response - ${res.error}`);
    }
  } catch (error) {
    console.log(`Some error occurred: ${error.message}`);
  }

  return [];
}

async function main() {
  const fromDate = 1688216220000;
  const tillDate = 1689166620000;

  try {
    let auctions = await getAuctions(fromDate, tillDate);
    if (auctions.length > 0) {
      for (const auction of auctions) {
        var createDate = new Date(auction.createDate);
        var placementDate = new Date(auction.placementDate);

        var auctionTime = createDate.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        });
        var formattedDate = createDate.toLocaleDateString("en-gb", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        }).replace(/\//g, '-');

        var participants = auction.bids.map(function(bid) {
          return bid.partnerName + "-" + bid.amount;
        }).join(", ");

        var winner = auction.bids.find(function(bid) {
          return bid.status === "ACCEPTED";
        });

        var winnerFormatted = "";
        if (winner) {
          winnerFormatted = winner.partnerName.toUpperCase() + "-" + winner.amount;
        }

        var auctionDurationMilliseconds = placementDate - createDate;
        var auctionDurationDays = Math.floor(auctionDurationMilliseconds / (1000 * 60 * 60 * 24));
        var auctionDurationHours = Math.floor((auctionDurationMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        var auctionDuration = "";
        if (auctionDurationDays > 0) {
          auctionDuration += auctionDurationDays + " day ";
        }
        auctionDuration += auctionDurationHours + " hour";

        var json = {
          "auctionDate": formattedDate,
          "auctionTime": auctionTime,
          "auctionDuration": auctionDuration,
          "origin": auction.origin.name,
          "destination": auction.destination.name,
          "consigneeName": auction.customerName,
          "participantsWithBidAmount": participants,
          "winnerWithBidAmount": winnerFormatted
        };

        console.log(json);
      }
    } else {
      console.log("No auction data found.");
    }
  } catch (error) {
    console.log(`Error occurred during auction data retrieval: ${error.message}`);
  }
}

main();
