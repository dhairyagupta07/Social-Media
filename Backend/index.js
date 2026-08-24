import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const port = 8082

const app = express();

mongoose.connect(process.env.dbURL).then(()=>{
    console.log('DB connected');
}).catch((err)=>{
    console.log(err);
})

app.listen(port, ()=>{
    console.log(`Server started at ${port}`)
})