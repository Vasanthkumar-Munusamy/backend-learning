const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type:String, required:[true, "please enter user name"] },
  email: { type:String, required:[true, "please enter email"], unique:true },
  password: { type:String, required:[true, "please enter password"] }
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
