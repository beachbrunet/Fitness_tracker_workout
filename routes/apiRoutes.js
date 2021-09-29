const db = require("../modles");
const router = express.Router();

// .catch((err) => {
//     res.json(err);
//   });

// call api - getWorkoutsInRange
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      res.json(err);
    });
});

// call api - createWorkout
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      res.json(err);
    });
});
// call api - getLastWorkout
addExercise(data);
// get the data from the backend

module.exports = router;
