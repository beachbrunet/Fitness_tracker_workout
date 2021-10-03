// include a path to get correct file for the html
const router = require("express").Router();
const path = require("path");
// const router = require("./apiRoutes");

// get method to bring user to the exercise page and bring the user to the stats page index html
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// exercise html
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// stats html
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
