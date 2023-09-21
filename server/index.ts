import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Blog from "./models/Blog";
import allRoutes from "./routes/allRoutes";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/", allRoutes);

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => console.log("Connected"))
  .catch((error) => console.log(error));

app.listen(process.env.PORT, () =>
  console.log(`listening @${process.env.PORT}`)
);
