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
// --wouldnt be using email but makes the user enter vaild info
// match: [/.+@.+\..+/, "Please enter a valid e-mail address"]

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      // Trim is to insure strings you save through the schema are properly trimmed
      type: {
        type: String,
        trim: true,
        required: true,
      },
      name: {
        type: String,
        trim: true,
        required: true,
      },
      duration: {
        type: Number,
        trim: true,
        required: true,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

workoutSchema.virtual("totalDuration").get(function () {
  const duration = this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
  return duration;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
