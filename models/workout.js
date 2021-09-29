const mongoose = require("mongoose");
const schema = mongoose.Schema;

// track workout: type: 'resistance',
// name: 'Bicep Curl',
// duration: 20,
// weight: 100,
// reps: 10,
// sets: 4,


const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now,
   },

   exercises: [{
        type: {
             type: String,
             required: true
        },
        name: {
             type: String,
             required: true,
             match: ["Please enter a valid name."],
        },
        