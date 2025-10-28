
import mongoose from "mongoose";

const username = ""; 
const password = ""; 
const host = "localhost";           
const port = "";                 
const dbName = "";            


const uri = `mongodb://${username}:${password}@${host}:${port}/${dbName}?authSource=admin`;


export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); 
  }
};


