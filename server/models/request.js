const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const RequestSchema = new Schema (
    {
        reqNum : Number,
        bloodNum : Number,
        email : String,
        state : String,
    }
);

const request = mongoose.model('request', RequestSchema)
module.exports = request;