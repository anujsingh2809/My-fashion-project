const express = require("express");
const route = express.Router();

route.get("/",(req,res)=>{
    res.render("index.hbs");
})
route.get("/about",(req,res)=>{
    res.render("about.hbs");
})
route.get("/contact",(req,res)=>{
    res.render("contact.hbs");
})
route.get("/faq",(req,res)=>{
    res.render("faq.hbs");
})
route.get("/feature",(req,res)=>{
    res.render("feature.hbs");
})
route.get("/project",(req,res)=>{
    res.render("project.hbs");
})
route.get("/service",(req,res)=>{
    res.render("service.hbs");
})
route.get("/team",(req,res)=>{
    res.render("team.hbs");
})
route.get("/testimonial",(req,res)=>{
    res.render("testimonial.hbs");
})
route.get("/login",(req,res)=>{
    res.render("auth/login.hbs");
})
route.get("/register",(req,res)=>{
    res.render("auth/register.hbs");
})

module.exports = route;