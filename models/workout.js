const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// What the user will be entering to make a workout
// track workout: type: 'resistance',
// name: 'Bicep Curl',
// duration: 20,
// weight: 100,
// reps: 10,
// sets: 4,

// maybe want to use for better user experiance? example 11
// match: [/.+@.+\..+/, "Please enter a valid e-mail address"]

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now,
   },
   exercises: [{
     // Trim is to insure strings you save through the schema are properly trimmed
        type: {
             type: String,
             trim: true,
             required: "Enter an exercise"
        },
        name: {
             type: String,
             trim: true,
             required: "Enter the exercise name"
        },
        duration: {
             type: Number,
             required: "Enter the duration of the exercise in mins"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
     }
]
}),

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;