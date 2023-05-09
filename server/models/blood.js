const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const BloodSchema = new Schema (
    {
        date : { type: Date, default: Date.now },
        bloodType : String,
        location : String,
        number : Number,
    }
);

const blood = mongoose.model('blood', BloodSchema)
module.exports = blood;