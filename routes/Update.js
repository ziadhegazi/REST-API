const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.patch("/:name", async (req, res) => {
    try {
        let updatedUser = await User.findOneAndUpdate({name: req.params.name}, {$set: {age: req.body.age}});
        res.json(updatedUser);
        console.log("user updated:", req.params.name)
    }
    catch(err) {
        console.error(err);
    }
})

module.exports = router;