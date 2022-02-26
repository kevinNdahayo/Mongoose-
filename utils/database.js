const mongoose = require("mongoose");
require("dotenv").config()
const mongodbUrl = "mongodb+srv://kevin:process.env.hash@cluster0.7fss6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const User = require("../user")

mongoose.connect(mongodbUrl, () => {
    console.log("Connected successfully"),
    error => {
        console.error(error);
    }
})
