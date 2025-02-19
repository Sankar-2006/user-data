const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const dbUri = process.env.MONGO_URI;

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("Database connection error:", error);
  });

let dataSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  }
});

let Data = mongoose.model("Data", dataSchema);

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

app.get("/", (req, res) => {
  res.send("Hello World");
  console.log("opend");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
