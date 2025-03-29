import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const connectDb = async () => {
  try {
    const connectDb = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDb;
