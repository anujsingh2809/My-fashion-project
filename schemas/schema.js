const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const myDataOptions = new Schema({
    Name : {
        type : String,
        require : true,
    },
    Email : {
        type : String,
        require : true,
    },
    Phone : {
        type : String,
        require : true,
    },
    Profile : {
        type : String,
        require : true,
    },
    Password : {
        type : String,
        require : true,
    },
    Address : {
        type : String,
        require : true,
    },
})

module.exports = myDataOptions