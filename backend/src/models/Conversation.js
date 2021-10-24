require('dotenv').config();
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Conversation = new Schema({
    _id: { //concatenated
        type: String,
    },
    members: {
        type: [] // Two Ids
    },
    log: {
        type: []
        // list of dictionaries 
        /*
        {
            id: ""
            message: "",
            timestamp: "",
        }
        */
    },
    last_message: {
        type: String
    },
    last_timestamp: {
        type: String
    }
});

module.exports = mongoose.model('Convo', Convo);
