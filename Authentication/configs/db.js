const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/authentication");
        console.log("Database connected successfully.");
    } catch (err) {
        res.status(400).json({ message: "Error occured while connecting DB.", err });
    }
}

module.exports = connectToDB;