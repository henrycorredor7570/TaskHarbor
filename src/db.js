import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({path: '.env'});

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://mongo:Hbg32d21-AHgF1Eb6H-1Cfb616cHGA13@monorail.proxy.rlwy.net:32268");
        console.log(">>> MongoDB Connected...");
    } catch (error) {
        console.log(error);
    }
}
