import express from "express";
import connectDb from "./config/connectDb.js";
import dotenv from "dotenv";
import userRoutes from "../api/routes/user.route.js";
import authRoutes from "./routes/Signup.route.js";

const app = express();
app.use(express.json());
dotenv.config();

connectDb();
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.port || 4000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
