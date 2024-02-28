const express = require("express");
const userRoute = require("./routes/users/routes");
const router = require("./routes/web/routes");
const postRoutes = require("./routes/web/postRoutes");
const { port } = require("./config");
const hbs = require("hbs");
var cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());   
app.use(express.urlencoded({ extended: true }));
app.use(express.static("views"));
app.set("view engine", "hbs");
hbs.registerPartials(`${__dirname}/views/partials`, () => {});

// Middleware to disable caching
app.use((req, res, next) => {
  res.header("Cache-Control", "no-store");
  next();
});

app.use("/", router);
app.use("/", postRoutes);
app.use("/my-admin", userRoute);

app.listen(port);