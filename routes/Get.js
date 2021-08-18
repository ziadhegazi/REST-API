const express = require("express");
const User = require("../models/User");

const router = express.Router();

let posts = []

router.get("/", async (req, res) => {
    try {
        posts = await User.find();
        res.json()
    }
    catch(err) {
        console.error(err)
    }

    res.send(posts)
})

module.exports = router;