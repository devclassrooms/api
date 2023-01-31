const express = require("express");

const route = require("./routes");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");



//.env config
const { parsed: config } = require('dotenv').config();
global.config = config;

app.use(bodyParser.json());
app.use("/", route);


mongoose.connect(config.DB_CONNECT, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) throw new Error(err);
    app.listen(5000, () => {
        console.log("Server started at 5000");
    })
});





function verifytoken(req, res, next) {

}