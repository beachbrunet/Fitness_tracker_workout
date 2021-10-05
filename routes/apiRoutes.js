// Add exercises to the most recent workout plan.
// Add new exercises to a new workout plan.
// View the combined weight of multiple exercises from the past
// seven workouts on the stats page.
// View the total duration of each workout from
// the past seven workouts on the stats page.
const router = require("express").Router();
const db = require("../models");
// const mongoose = require("mongoose");

// get workout data from range
router.get("/api/workouts/range", (req, res) => {
  db.Workout.aggregate([
    {
      // from /public/workout
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
        totalWeight: { $sum: "$exercises.weight" },
        totalSets: { $sum: "$exercises.sets" },
        totalReps: { $sum: "$exercises.reps" },
        totalDistance: { $sum: "$exercises.distance" },
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

// getting last workout data
router.get("/api/workouts", async (req, res) => {
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
      res.status(400).json(err);
    });
});

// create workout
router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
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
    {
      _id: req.params.id,
    },
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

module.exports = router;
