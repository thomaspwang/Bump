const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Conversation = require("../models/Conversation");

// get friend name


// get request = get all info from conversation
router.get("/conversation", (req, res) => {

    user = req.query._id;
    friendID = req.query.friendid;
    chat_history = []
    // make convoID
    var smallerID = user;
    var largerID = friendID;
    if (user > friendID) {
        smallerID = friendID;
        largerID = user;
    }
    const convoID = smallerID + largerID;

    Conversation.findOne({ _id: convoID }).then(convo => {
        if (!convo) {
            return res.status(400).json({ user: "Conversation Not Found" });
        } else {
            User.findOne({ _id: friendID }).then(friend => {
                friend_name = friend.name;
                convo_info = {
                    "user": user, "friendID": friendID, "friend_name": friend_name, "profilePic":  friend.profilePic,
                    "convo.last_message": convo.last_message, "convo.last_timestamp": convo.last_timestamp,
                    "convo.log": convo.log
                };
                res.send(convo_info);
            });
        }
    })
})

// add chat to conversation server
router.post("/conversation", (req, res) => {

    user = req.body._id;
    time = req.body.time;
    message = req.body.message;
    friendID = req.body.friendid;

    // make convoID
    var smallerID = user;
    var largerID = friendID;
    if (user > friendID) {
        smallerID = friendID;
        largerID = user;
    }
    const convoID = smallerID + largerID;

    // find convo ID
    Conversation.findOne({ _id: convoID }).then(convo => {
        // if convo does not yet exist
        if (!convo) {
            // make new convo
            newConvo = new Conversation({
                _id: convoID,
                members: [smallerID, largerID],
                log: [req.body],
                last_message: message,
                last_timestamp: time,
            });
            // save convo and upload
            newConvo.save(function (err) {
                if (err) return handleError(err);
                newConvo => res.json(newConvo)
            })
            // convo exists, add new req to log    
        } else {
            convo.log.push(req.body);
            convo.last_message = message;
            convo.last_timestamp = time;
            convo
                .save()
                .then(convo => res.json(convo))
                .catch(err => console.log(err))
        }
    })
})

module.exports = router;


