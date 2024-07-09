import express from "express";
import dotenv  from "dotenv";
import cors from  "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dbConnection from "./database/dbConnection.js";
import {errorMiddleware} from "./middlewares/error.js"

const app = express();

// give path to dotenv
dotenv.config({path:"./config/config.env"});

// access port from dotenv
console.log(process.env.PORT);

// Connect Backend with frontend
app.use(cors({
origin:[process.env.PORTFOLIO_URL, process.env.DASHBOARD_URL],
methods:["GET", "POST", "DELETE", "PUT"],
    credentials: true,    
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp/",
    })
);

// Add Database connection to app
dbConnection();
app.use(errorMiddleware);

export default app;