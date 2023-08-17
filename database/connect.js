import mongoose from "mongoose"

export const connectDb = async () => {

    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_CONNECTION_STRING)
        console.log("Database Connected")

    } catch (error) {
        console.log(error)
    }
}
