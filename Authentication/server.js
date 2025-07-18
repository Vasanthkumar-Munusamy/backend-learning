require("dotenv").config();
const express = require("express");
const connectToDB = require("./configs/db");
const UserRouter = require("./routes/user.routes");
const app = express();
const PORT = process.env.PORT;


app.get("/test", (req, res) => {
    res.status(200).json({ status_code: 200, message: "Test is successfull." });
})
 
app.use("/users", UserRouter);

app.use((req, res) => {
    res.status(404).json({ status_code: 404, message: "Page Not Found." });
});

app.listen(PORT, () => {
    connectToDB();
    console.log("Server is started on the port", PORT);
})