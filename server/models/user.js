const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const UserSchema = new Schema(
    {
        name:String,
        email:String,
        password : String,
        birthday:Date,
        bloodType : String,
    }
);

const user = mongoose.model('user',UserSchema)
module.exports = user; 

