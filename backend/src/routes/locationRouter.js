const express = require("express");
const router = express.Router();

const User = require("../models/User");
// returns array of friend locations
router.get("/friends", (req, res) => {
    user = req.query._id
    friend_locs = []
    User.findOne({ _id: user}).then(user => {
        if (!user) {
            return res.status(400).json({ user: "User Not Found" });
        } else {
            for (i = 0; i < user.friends.length; i ++) {
                curr = User.findOne({_id: friend.friendID})
                friend_locs[i] = curr.location
            }
            res.send(friend_locs)
        }
    });
});

router.post("/user", (req, res) => {

    const location = req.body.location;
    const user = req.body._id
  // Find user 
    User.findOne({ user }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ usernotfound: "User not found" });
      }

        else {
          user.location = location
          user
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      }
    });
})


  module.exports = router;
