import express from "express";
import { taskRouter } from "./routes/taskRoute.js";

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks" , taskRouter)

export default app;