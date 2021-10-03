// Add exercises to the most recent workout plan.
// Add new exercises to a new workout plan.
// View the combined weight of multiple exercises from the past
// seven workouts on the stats page.
// View the total duration of each workout from
// the past seven workouts on the stats page.
const router = require("express").Router();
const db = require("../models");

// getting workout data
router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// create workout
router.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Want to update object from the front end
router.put("/api/workouts/id:", (req, res) => {
  db.Workout.findByIDAndUpdate(
    req.params.id,
    // pushing array the new object to the front
    { $push: { exercises: req.body } },
    { new: true, runValidators: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
// can I combine id, and range?

// get workout data from range
router.get("/api/workouts/range", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// example code
// app.get("/name", (req, res) => {
//     db.animals.find().sort({ name: 1 }, (err, found) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.json(found);
//       }
//     });
//   });

// example code 2
// const aggregate = Model.aggregate([
//     { $project: { a: 1, b: 1 } },
//     { $skip: 5 }
//   ]);

//   Model.
//     aggregate([{ $match: { age: { $gte: 21 }}}]).
//     unwind('tags').
//     exec(callback);

module.exports = router;
