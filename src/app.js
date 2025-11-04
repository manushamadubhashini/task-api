import express from "express";
import { taskRouter } from "./routes/taskRoute.js";
import { ErrorHandler } from "./middleware/errorhandler.js";

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks" , taskRouter)

// Error handling middleware 
app.use(ErrorHandler);

export default app;