import app from './app.js'
import { connectDB } from './db.js';

import dotenv from "dotenv";
dotenv.config({path:".env"});

const host = process.env.HOST || '0.0.0.0';
const port = process.env.MONGO_PORT || 3000;

connectDB();
app.listen(port, host, () => {
    console.log("Server on port: ", port); 
});
