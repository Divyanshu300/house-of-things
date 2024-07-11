const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true,
    },
    lastname : {
        type : String,
        required : true,
    },
    phone : {
        type : Number,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    country : { 
        type : String,
    },
    email : { 
        type : String,
    },
    state : { 
        type : String,
    },
    city : { 
        type : String,
    },
    postal : { 
        type : String,
    },
    password : { 
        type : String,
    },
});

module.exports = mongoose.model("User" , userSchema);