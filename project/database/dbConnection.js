import mongoose from "mongoose";

// setup connection to database
const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "PORTFOLIO"
    }).then(()=>{
        console.log("connected to databse.");
    }).catch((error)=>{
        console.log(`Some Error Occured While Connecting To Database. ${error}`);
    });
};

export default dbConnection;