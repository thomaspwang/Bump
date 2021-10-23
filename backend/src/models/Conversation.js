require('dotenv').config();
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Conversation = new Schema({
    members: {
        type: [] // List of friendIds
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
    }
});

module.exports = mongoose.model('Convo', Convo);