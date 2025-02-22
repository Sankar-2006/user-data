const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const Data = require("./db");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json())

let createData = async (name, email) => {
  try {
    let data = new Data({
      name: name,
      email: email
    });
    await data.save();
    return ("Data created successfully");
  }
  catch (err) {
    return ("Error creating data:");
  }
};

let fetchDataByName = async (name) => {
  try {
    let data = await Data.findOne({ name: name });
    return data;
  } catch (err) {
    return "No data found";
  }
};

app.get("/", async (req, res) => {
  let name = req.query.name;
  if (!name) {
    res.send("Name query parameter is required");
    return;
  }
  let result = await fetchDataByName(name);
  res.send(result);
});

app.post("/", async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let log = await createData(name, email);
  res.send(log);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
