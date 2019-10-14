const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect(process.env.BD_HOST, {
  useNewUrlParser: true
});

mongoose.connection.on("connected", () => {
  console.log(`Mongoose connection open ${process.env.BD_HOST}`);
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
