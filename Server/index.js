import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import userRoute from "./routes/user.route.js";
import mongoose from "mongoose";
dotenv.config()

const app = express();

app.use(cors())
mongoose.connect(process.env.DB_URI).then(() => console.log("Database is connected"))

app.get("/", (req, res) => {
    res.send("Hello")
})
app.use(express.json())
app.use("/api/v1", userRoute)

app.listen(8000, () => { console.log("Localhost run sucessfully") })