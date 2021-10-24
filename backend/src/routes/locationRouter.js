const express = require("express");
const router = express.Router();

const User = require("../models/User");


// returns array of friend locations, names and ids
// location array should be inside json
router.get("/friends", (req, res) => {
    user = req.query._id
    friend_locs = []
    User.findOne({ _id: user}).then(user => {
        if (!user) {
            return res.status(400).json({ user: "User Not Found" });
        } else {
            User.find({_id: { $in: user.friends }}).then(arr => {
                for (i = 0; i < arr.length; i ++) {
                    idNameLocationPic = {_id: arr[i]._id, name: arr[i].name, location: arr[i].location, profilePic: arr[i].profilePic}
                    friend_locs.push(idNameLocationPic)
                }
                res.send(friend_locs)
            })
            /*
            promises = []
            for (i = 0; i < user.friends.length; i ++) {
                promises.push(User.findOne({_id: user.friends[i]}).exec())
                
                promises.push(() => User.findOne({_id: user.friends[i]}).then(curr => {
                idNameLocation = {_id: curr._id, name: curr.name, location: curr.location}
                friend_locs.push(idNameLocation)
                }))
            }

            Promise.all(promises).then(res.send(friend_locs))
            */
        }
    });
});

router.get("/user", (req, res) => {
    user = req.query._id
    User.findOne({ _id : user }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ usernotfound: "User not found" });
      } else {
        return res.json(user)    
      }
    
    })
})


// Updates user location
router.post("/user", (req, res) => {

    const location = req.body.location;
    const user = req.body._id
  // Find user 
    User.findOne({ _id : user }).then(user => {
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

// adds one friend
router.post("/addfriend", (req, res) => {

    const friendId = req.body.friendId;
    const user = req.body._id
  // Find user
    User.findOne({ _id : user }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ usernotfound: "User not found" });
      }

        else {
          console.log(user.friends)
          if (!user.friends.includes(friendId) && friendId != user._id) {
            user.friends.push(friendId)    
          } 
          user
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      }
    });
})

  module.exports = router;
