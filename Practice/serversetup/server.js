const express = require(`express`);
const app = express();
const PORT = 3000;

app.get(`/testServer`, (req, res) => {
  res.send({
    data: {
      name: "ABCD",
      age: "34",
    },
  });
});

app.get(`/`, (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
