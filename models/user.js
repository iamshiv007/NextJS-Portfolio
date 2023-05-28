import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
})

export const User = mongoose.model("User", userSchema)