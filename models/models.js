const { myDataOptions } = require("../schemas/schema");
const mongoose = require("mongoose");

const collections = mongoose.model("MyData",myDataOptions);

module.exports = collections;