const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const RequestSchema = new Schema (
    {
        email : String,
        name : String,
        reqNum : Number,
        status : String,
        donationType : String,
    }
);

const request = mongoose.model('request', RequestSchema)
module.exports = request;