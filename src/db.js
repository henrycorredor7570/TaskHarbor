import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({path: '.env'});

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://henrycorredor7570:real.madrid10@cluster0.uo4elvf.mongodb.net/?retryWrites=true&w=majority");
        console.log(">>> MongoDB Connected...");
    } catch (error) {
        console.log(error);
    }
}
