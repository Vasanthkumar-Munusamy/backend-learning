const express = require("express");
const UserRouter = express.Router();
const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");
const saltRounds = 10;

UserRouter.post("/signup", (req, res) => {
  console.log(req.body);
  try {
    let myPlaintextPassword = req.body.password;
    bcrypt.hash(myPlaintextPassword, saltRounds, async function (err, hash) {
      // Store hash in your password DB.
        if(err) {
            res.status(400).json("Something went wrong. Error :", err);
        }
        else {
            await UserModel.create({ ...req.body, password: hash });
            res.status(200).json({ msg: "User signed up successfully.", username: req.body.username, email: req.body.email });
        }
    });
  } catch (error) {
    res.status(400).json({ msg: "Error occured : ", err });
  }
});

module.exports = UserRouter;
