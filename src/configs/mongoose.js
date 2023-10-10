import mongoose from "mongoose";
import { getEnv } from "./env.config.js";
import asyncHandler from "express-async-handler";

const connectDB = asyncHandler(async () => {
  const connection = await mongoose.connect(getEnv.MONGO_URI);
  console.log(`connected to MongoDB: ${connection.connection.host}`);
});

export { connectDB };
