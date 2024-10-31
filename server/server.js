import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.routes.js"
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './db/connectDB.js';
const app = express()
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes)

app.listen(PORT,() => {
    console.log(`Server is running on Port ${PORT}`);
    connectDB()
});
