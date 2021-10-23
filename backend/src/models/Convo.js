require('dotenv').config();
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Convo = new Schema({
    users: {
        
    },
    password: {
        type: String, 
        required: true
    },
    location:{
        type: String
    },
    status: {
        type: String,
    },
    friends: {
        type: []
    }
    // userID: {
    //     type: String,
    // }, Is this necessary??
});

module.exports = mongoose.model('Convo', Convo);