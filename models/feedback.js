const { default: mongoose } = require("mongoose");

const mailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    rating: {
        type: number,
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

export const Mail = mongoose.model("mail", mailSchema)