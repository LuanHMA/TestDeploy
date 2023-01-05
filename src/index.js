import express from "express";
import dotenv from "dotenv";
import { todoRouter } from "./routes/todoRouter.js";
import "./database/db.js";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/todolist", todoRouter);

app.listen(port, () => console.log("Server is running on port " + port));
