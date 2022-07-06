const express = require("express");
const app = express();
const port = 8081;
const cors = require("cors");
const countryList = require("./countryDummyData");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("hello world endpoint hit");
  return res.status(200).send({
    data: "hello world",
  });
});

app.get("/getcountry", (req, res) => {
  console.log("getting one country endpoint got a hit");
  return res.status(200).send(countryList[5]);
});

app.get("/getcountries", (req, res) => {
  console.log("getting countries endpoint got a hit");
  return res.status(200).send(countryList);
});

app.get("/getuserdata", (req, res) => {
  console.log("getting user data endpoint got a hit");
  return res.status(200).send({
    name: "Bob",
    email: "bob@bob.com",
  });
});

app.post("/addcountry", async (req, res) => {
  console.log("add new country endpoint got a hit");
  console.log(JSON.stringify(req.body));

  const { countryName, countryCode, countrySomething } = req.body;

  console.log(`fe param: countryName ${countryName}`);
  console.log(`fe param: countryCode ${countryCode}`);
  console.log(`fe param: countrySomething ${countrySomething}`);

  return res.status(201).send({ message: "success" });
});

app.listen(port, () => {
  console.log(`connected on port ${port}`);
});

module.exports = app;
