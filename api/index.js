import express from "express";
import connectDb from "./config/connectDb.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

connectDb();

const port = process.env.port || 4000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
