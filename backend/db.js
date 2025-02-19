const mongoose = require("mongoose");
require('dotenv').config();

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

module.exports = Data;
