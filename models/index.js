const mongoose = require("mongoose");
const dbUrl =
  process.env.MODE === "dev"
    ? process.env.BD_HOST_DEV
    : process.env.BD_HOST_PROD;
mongoose.Promise = global.Promise;
console.log(222);
console.log(dbUrl);

mongoose.connect(dbUrl, {
  useNewUrlParser: true
});

mongoose.connection.on("connected", () => {
  console.log(`Mongoose connection open ${dbUrl}`);
});

mongoose.connection.on("error", err => {
  console.log("Mongoose connection error: " + err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("Mongoose connection disconnected app termination");
    process.exit(0);
  });
});
