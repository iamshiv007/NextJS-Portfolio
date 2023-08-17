const { default: mongoose } = require("mongoose");

const mailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
})

mongoose.models = {};

export const Mail = mongoose.model("mail", mailSchema)