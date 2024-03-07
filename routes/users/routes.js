const express = require("express");
const route = express.Router();
const users = require("../../users.json");
const fs = require('fs');

route.get("/", (req, res) => {
    if (!req.cookies.token) {
        return res.redirect("/login");
    }
    res.render("admin/index.hbs", { myusers: users });
    res.status(200);
})
route.get("/viewUser", (req, res) => {
    let singleData = users.find((v) => { return v.Email == req.query.email });
    res.render("admin/viewUser.hbs", singleData);
    res.status(200);
})
route.get("/deleteuser", (req, res) => {
    let userIndex = users.findIndex(data => data.Email == req.query.email);
    users.splice(userIndex, 1);
    fs.writeFile("./users.json", JSON.stringify(users), (err) => {
        res.redirect("/my-admin");
    })
})

route.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/login");
})

module.exports = route;