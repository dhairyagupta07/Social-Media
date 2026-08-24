import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const port = 8082

const app = express();

mongoose.connect(process.env.dbURL).then(()=>{
    console.log('DB connected');
}).catch((err)=>{
    console.log(err);
})

app.use(express.json())
app.use('/users', userRoutes)


app.listen(port, ()=>{
    console.log(`Server started at ${port}`)
})