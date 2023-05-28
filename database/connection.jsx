import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://projectnotes0:todonext@cluster-note0.uprsbhq.mongodb.net/"
    );
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
