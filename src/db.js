import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({path: '.env'});

const URL = process.env.MONGO_DB_URL;

export const connectDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log(">>> MongoDB Connected...");
    } catch (error) {
        console.log(error);
    }
}