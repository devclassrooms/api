const express = require("express");
const route = express.Router();
const jwt = require("jsonwebtoken");
const { verifyToken, register, login } = require("./authentication");



route.get("/", verifyToken, (req, res) => {
    res.json({
        message: "welcome to API"
    });
});

route.post("/register", (req, res) => {
    register(req, (err, token) => {
        if (err) {
            console.log(err)
            return res.status(500).json({
                message: err
            });
        } else {
            return res.status(200).json({
                message: "registerd succefully"
            });
        }
    })
});


route.post("/login", (req, res) => {
    login(req, res, (err, tokenList) => {
        if (err) {
            return res.status(500).json({
                message: err
            });
        } else {
            return res.status(200).json({
                token: tokenList[0],
                refresh_token: tokenList[1],
                message: "Login successful to API"
            });
        }
    })
});


route.get("/post", verifyToken, (req, res) => {
    jwt.verify(req.token, config.jwt_secret, (err, authData) => {
        if (err) return res.status(401).json({
            message: "Token Expired"
        });
        else {
            res.json({
                authData: authData,
                message: "Login successful to API"
            });
        }
    });
});

module.exports = route;