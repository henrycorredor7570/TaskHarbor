import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({path: '.env'});

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/taskharbor");
        console.log(">>> MongoDB Connected...");
    } catch (error) {
        console.log(error);
    }
}
//process.env.MONGODB_URL