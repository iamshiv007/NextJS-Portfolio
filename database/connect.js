import mongoose from "mongoose"

export const connectDb = async () => {

    try {
        await mongoose.connect("mongodb+srv://iamshiv20032003:sciLDudcA7PwvktP@cluster0.bpciu8m.mongodb.net/portfolio")

    } catch (error) {
        console.log(error)
    }
}
