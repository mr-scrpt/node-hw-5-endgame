require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const helmet = require("helmet");
//const cookieParser = require("cookie-parser");
const logger = require("morgan");
//const bodyParser = require("body-parser");
const multer = require("multer");
require("./models");

const app = express();
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
//app.use(multer({ dest: "./uploads/" }).single("avatar"));
//app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/v1.0", require("./routes/api/v1.0"));

app.use("*", (req, res) => {
  res.sendFile(path.resolve(process.cwd(), "public/index.html"));
});

//app.use(cookieParser());
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);

  res.json({
    message: err.message,
    error: err
  });
});

module.exports = app;
