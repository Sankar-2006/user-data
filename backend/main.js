const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const Data = require("./db");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

let createData = async (name, email) => {
  try {
    let data = new Data({
      name: name,
      email: email
    });
    await data.save();
    console.log("Data created successfully");
  }
  catch (error) {
    console.log("Error creating data:", error);
  }
};

bodyParser.urlencoded({ extended: true });
app.use(cors());
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  createData(name, email);
  res.send("Data created successfully");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


