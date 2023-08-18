const { default: mongoose } = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    rating: {
        type: Number,
        required: true
    },
    good: {
        type: String,
    },
    bad: {
        type: String,
    },
    suggetion: {
        type: String,
    },
})

mongoose.models = {};

export const Feedback = mongoose.model("feedback", feedbackSchema)