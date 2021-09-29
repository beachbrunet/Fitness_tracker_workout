// added base code
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// added from 08 example
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// DB
const db = require("./models");
moongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/#", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

require("./routes/#")(app);
require("./routes/#")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
