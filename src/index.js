import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./database/db.js";
import app from "./app.js";
import router from "./routes/router.js";
import cookiParser from "cookie-parser";


dotenv.config({
    path: '/env'
})

app.use(express.json());
app.use(cookiParser());
app.use(cors()); 
app.use(router);



connectDB()
.then(() =>{
    const port = process.env.PORT || 8000
    app.listen(process.env.port, () =>{
        console.log(`server is running on port : ${port} `);
    })
})
.catch((err) =>{
    console.log("mongoDB connection failed !!!", err);
})