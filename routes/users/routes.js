const express = require("express");
const route = express.Router();

route.get("/",(req,res)=>{
    if(!req.cookies.token){
        return res.redirect("/login");
    }
    res.render("admin/index.hbs");
    res.status(200);
})

module.exports = route;