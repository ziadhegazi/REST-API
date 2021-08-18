const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.Schema({
    name: {type:String, required:true},
    email: {
        type:String,
        required:true,
        unique:true,
        validate: (value) =>{
            return validator.isEmail(value)
        }
    },
    age: {type:Number, default:"N/A"}
})

module.exports = mongoose.model("User", User);