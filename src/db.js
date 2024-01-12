import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({path: '.env'});

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://mongo:gCf65Fae3DEED2G-DcBccbEG3fEGddCB@monorail.proxy.rlwy.net:31944");
        console.log(">>> MongoDB Connected...");
    } catch (error) {
        console.log(error);
    }
}
