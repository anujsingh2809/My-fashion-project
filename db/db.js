const mongoose = require("mongoose");

const db = mongoose.connect('mongodb://127.0.0.1:27017/Users').then((v) => {
    console.log("Connection successful: " + v);
}).catch((error) => {
    console.log("Connection was not connect due to: " + error);
})

module.exports = db;