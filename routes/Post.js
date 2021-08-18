const express = require("express");
const User = require("../models/User")

const router = express.Router();

router.post("/", (req, res) => {
    res.send("posting")
    // console.log(req.body);
    const post = new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    });
    console.log(post)

    User.create(post)
        .then((data) => res.json(data))
        .catch((err) => console.log(err))
})

module.exports = router;