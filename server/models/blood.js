const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const BloodSchema = new Schema (
    {
        date : String,
        bloodType : String,
        location : String,
        number : Number,
        id : Number,
    }
);

const blood = mongoose.model('blood', BloodSchema)
module.exports = blood;