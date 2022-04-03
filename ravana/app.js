var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// Global Variable
global.fetch = require("node-fetch");

// Cron Setting
global.CronJob = require("./cron.js");

const commonResponse = require("./helpers/commonResponse");
const middleware = require("./helpers/middleware");
const db = require("./helpers/database");

var indexRouter = require("./routes/index");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//app.use(middleware.verify_api_key);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

db.getConnection();

indexRouter.initialize(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  //next(createError(404));
  const error = new Error("INVALID_REQUEST");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  /*res.json({
    error: true,
    message: error.message,
  });*/
  console.log(error);
  commonResponse.error(res, error.message, error.status);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
