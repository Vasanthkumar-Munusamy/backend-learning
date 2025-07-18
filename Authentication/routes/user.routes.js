const express = require('express');
const UserRouter = express.Router();

UserRouter.post("/", (req, res) => {
    try {
        res.status(200).json({ msg: "User Post Request" });
    } catch (error) {
        res.status(400).json({ msg: "Error occured : ", err });
    }
});

module.exports = UserRouter;