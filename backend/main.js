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

// let createData = async (name, email) => {
//   try {
//     let data = new Data({
//       name: name,
//       email: email
//     });
//     await data.save();
//     console.log("Data created successfully");
//     return { success: true };
//   }
//   catch (error) {
//     console.log("Error creating data:", error);
//     return { success: false, error: error.message };
//   }
// };

// app.post("/", async (req, res) => {
//   let name = req.body.name;
//   let email = req.body.email;
//   let customHeader = req.get('X-Request-Source');
//   console.log("X-Request-Source:", customHeader);
//   let result = await createData(name, email);
//   if (result.success) {
//     res.status(200).send("Data created successfully");
//   } else {
//     res.status(500).send(`Error creating data: ${result.error}`);
//   }
// });

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
    if (data) {
      return data;
    } else {
      return "No data found";
    }
  } catch (err) {
    return "Error fetching data";
  }
};



app.get("/", async (req, res) => {
  let name = req.query.name;
  if (name) {
    let result = await fetchDataByName(name);
    res.send(result);
  } else {
    res.send("Name query parameter is required");
  }
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


