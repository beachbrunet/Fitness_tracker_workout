const db = require("../modles");
const router = express.Router();

// .catch((err) => {
//     res.json(err);
//   });

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

// Add exercise api
router.put('workouts/:id', (req,res) => {
    req.params.id;


}



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
