require('dotenv').config();
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Conversation = new Schema({
    members: {
        type: [] // Two friendIDs
    },
    log: {
        type: []
        // list of dictionaries 
        /*
        {
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