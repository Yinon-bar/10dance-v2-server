import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./6-controller/router";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api", router);


const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
mongoose.set('strictQuery', false);
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  async (err) => {
    if(err){console.log(err)}else { app.listen(process.env.PORT); console.log("Connected to DB and listening to port ",process.env.PORT)}  
  }
);