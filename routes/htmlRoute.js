// include a path to get correct file for the html
const path = require("path");


// get method to bring user to the exercise page and bring the user to the stats page


module.exports = function (app) {
  app.get("/exercise"), (req, res) => {
    res.sendFile("/exercise.html");
  }); 
app.get ("/stats"), (req , res) => {
    res.sendFile("/stats.html");
}

// path.join(__dirname, "../public");