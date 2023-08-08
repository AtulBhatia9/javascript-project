



function getRandomTransporterName(transporters) {
    const randomIndex = Math.floor(Math.random() * transporters.length);
    return transporters[randomIndex].name;
  }
  
  
//   const randomTransporterName = getRandomTransporterName(transporters);
//   console.log(randomTransporterName);


function generateRandomNumberWithOffset() {
    var baseNumber = generateRandomNumberKmStart();
    var offset = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
    return baseNumber + offset;
  }
  
  function generateRandomNumberKmStart() {
    return Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
  }
  var kmStartValue = generateRandomNumberKmStart()
//   console.log(`KM START ${kmStartValue}`);
  var randomNumberWithOffset = generateRandomNumberWithOffset();
//   console.log(`KM END : ${randomNumberWithOffset}`);
////////////////////////////////////////////////////////////////////////


function generateRandomNumber() {
    return Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
  }
  
  function addRandomNumberInRange(number) {
    var randomNumberInRange = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
    return number + randomNumberInRange;
  }
  
  var randomNumber = generateRandomNumber();
//   console.log(`KM START: ${randomNumber}`);
  var result = addRandomNumberInRange(randomNumber);
//   console.log(`KM END :${result}`);



/////////////////////////
const transporters = [
    {
      name: "Rajesh Transports",
      number: 1,
    },
    {
      name: "Priya Logistics",
      number: 2,
    },
    {
      name: "Amit Movers",
      number: 3,
    },
    {
      name: "Sneha Express",
      number: 4,
    },
    {
      name: "Rakesh Delivery",
      number: 5,
    },
    {
      name: "Anita Shippers",
      number: 6,
    },
    {
      name: "Vikram Cargo",
      number: 7,
    },
    {
      name: "Pooja Carriers",
      number: 8,
    },
    {
      name: "Suresh Transport",
      number: 9,
    },
    {
      name: "Geeta Roadlines",
      number: 10,
    },
    {
      name: "Naveen Logistics",
      number: 11,
    },
    {
      name: "Smita Carriers",
      number: 12,
    },
    {
      name: "Sanjay Movers",
      number: 13,
    },
    {
      name: "Meera Transports",
      number: 14,
    },
    {
      name: "Rahul Express",
      number: 15,
    },
    {
      name: "Deepika Roadways",
      number: 16,
    },
    {
      name: "Arjun Logistics",
      number: 17,
    },
    {
      name: "Anjali Movers",
      number: 18,
    },
    {
      name: "Vishal Carriers",
      number: 19,
    },
    {
      name: "Kavita Transport",
      number: 20,
    },
    {
      name: "Rajani Shippers",
      number: 21,
    },
    {
      name: "Prakash Roadlines",
      number: 22,
    },
    {
      name: "Shilpa Cargo",
      number: 23,
    },
    {
      name: "Sudhir Express",
      number: 24,
    },
    {
      name: "Poonam Carriers",
      number: 25,
    },
    {
      name: "Arun Transports",
      number: 26,
    },
    {
      name: "Neha Logistics",
      number: 27,
    },
    {
      name: "Sarita Movers",
      number: 28,
    },
    {
      name: "Raman Shippers",
      number: 29,
    },
    {
      name: "Hema Transport",
      number: 30,
    },
    {
      name: "Kunal Delivery",
      number: 31,
    },
    {
      name: "Ashwini Roadlines",
      number: 32,
    },
    {
      name: "Vijay Cargo",
      number: 33,
    },
    {
      name: "Sheetal Carriers",
      number: 34,
    },
    {
      name: "Amar Transports",
      number: 35,
    },
    {
      name: "Jaya Logistics",
      number: 36,
    },
    {
      name: "Akhil Movers",
      number: 37,
    },
    {
      name: "Anusha Express",
      number: 38,
    },
    {
      name: "Raghav Roadways",
      number: 39,
    },
    {
      name: "Divya Shippers",
      number: 40,
    },
    {
      name: "Nikhil Transport",
      number: 41,
    },
    {
      name: "Rita Logistics",
      number: 42,
    },
    {
      name: "Sameer Movers",
      number: 43,
    },
    {
      name: "Madhuri Carriers",
      number: 44,
    },
    {
      name: "Amita Transports",
      number: 45,
    },
    {
      name: "Vinay Express",
      number: 46,
    },
    {
      name: "Nisha Roadlines",
      number: 47,
    },
    {
      name: "Kartik Logistics",
      number: 48,
    },
    {
      name: "Narendra Cargo",
      number: 49,
    },
    {
      name: "Shweta Delivery",
      number: 50,
    },
  ];
const randomTransporterName = getRandomTransporterName(transporters);

function getRandomTransporterName(transporters) {
    const randomIndex = Math.floor(Math.random() * transporters.length);
    return transporters[randomIndex].name;
  }
  console.log(randomTransporterName);
  