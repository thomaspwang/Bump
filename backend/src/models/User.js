require('dotenv').config();
const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

let User = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error('Invalid Email');
            }
        },
    },
    password: {
        type: String, 
        required: true
    },
    location:{
        type: []
        /*
        {
            lat: int,
            lon: int
        }
        */
    },
    status: {
        type: String,
    },
    profilePic: {
        type: String,
    },
    
    friends: {
        type: [] 
        // list of dictionaries 
        /*
        {
            friendID: "",
            convoID: "",
            notifNum: int,
            lastMsg: ""
        }
        */
    }
    // userID: {
    //     type: String,
    // }, Is this necessary??
});

module.exports = mongoose.model('User', User);
