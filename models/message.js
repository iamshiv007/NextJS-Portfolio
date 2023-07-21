const { default: mongoose } = require("mongoose");

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileNo: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    },
})

mongoose.models = {};

export const Message = mongoose.model('Messages', messageSchema)