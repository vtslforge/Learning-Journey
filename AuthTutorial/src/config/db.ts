import mongoose from "mongoose";

export async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("mongo connected");
  } catch (error) {
    console.error("mongo db connection error");
    process.exit(1);
  }
}
