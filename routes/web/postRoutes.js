const express = require("express");
const route = express.Router();
const users = require("../../users.json");
const fs = require("fs");

route.post("/register-admin", (req, res) => {
    users.push(req.body);
    fs.writeFile("./users.json", JSON.stringify(users), (err) => {
        if (err) {
            res.send("Something went wrong " + err);
        } else {
            res.redirect("/login");
        }
    })
})

route.post("/login-admin", (req, res) => {
    if(users.length != 0){
        users.find((data) => {
            if (data.Email === req.body.Email) {
                if (data.Password === req.body.Password) {
                    res.cookie("token", "random_cookie", { maxAge: 60 * 60 * 1000 * 24, httpOnly: true, path: "/my-admin" });
                    return res.redirect("/my-admin");
                } else {
                    return res.render("auth/login.hbs", { pass: "incorrect password" })
                }
            } else {
                return res.render("auth/login.hbs", { user: "Username or Email not found<br>Please signup.." });
            }
        });
    }else{
        return res.render("auth/login.hbs", { user: "Username or Email not found\nPlease signup.." });
    }
})

module.exports = route;