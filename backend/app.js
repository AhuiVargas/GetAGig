require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const session = require("express-session");
const passport = require("./handlers/passport");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost/backend", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app = express();



app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:3001']
  })
)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

app.use(
  session({
    secret:'s3cret',
    saveUninitialized: false,
    resave: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
  })
)

app.use(passport.initialize())
app.use(passport.session())


const index = require("./routes/index");
app.use("/", index);

module.exports = app;
