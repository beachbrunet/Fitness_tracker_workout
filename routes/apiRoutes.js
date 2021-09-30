// Add exercises to the most recent workout plan.

// Add new exercises to a new workout plan.

// View the combined weight of multiple exercises from the past seven workouts on the stats page.

// View the total duration of each workout from the past seven workouts on the stats page.

const db = require("../modles");
const router = express.Router();
// call api - createWorkout

// call api - getLastWorkout

// Find/get workouts data from the backend
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});
// call api - getWorkoutsInRange
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Add exercise api and insert into db
router.put("workouts/:id", (req, res) => {
  const workoutID = req.params.id;
  console.log(workoutID);
  console.log(req.body);
  db.Workout.something(workoutID, { $push: { excercies: req.body } })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// edited this to create a new workout
router.post("/api/workouts", ({ body }, res) => {
  console.log(body);
  db.Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Example code:
// app.get("/find/:id", (req, res) => {
//     db.notes.findOne(
//       {
//         _id: mongojs.ObjectId(req.params.id)
//       },
//       (error, data) => {
//         if (error) {
//           res.send(error);
//         } else {
//           res.send(data);
//         }
//       }
//     );
//   });

addExercise(data);

module.exports = router;
