const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.delete("/:name", async (req, res) => {
    try {
        let removedUser = await User.remove({name: req.params.name});
        res.json(removedUser);
        console.log("user deleted")
    }
    catch(err) {
        console.error(err)
    }
})

module.exports = router;