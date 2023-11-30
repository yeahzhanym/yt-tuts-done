import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to mongodb.");
  } catch (error) {
    throw new Error("Error while connecting.");
  }
};

export default connectMongoDB