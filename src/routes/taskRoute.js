import { Router } from "express";
import { getAllTask,createTask,deleteTask,updateTask } from "../controllers/taskController.js";

export const taskRouter = Router();
taskRouter.get("/getAll" , getAllTask);
taskRouter.post("/create" , createTask);
taskRouter.delete("/delete/:id" , deleteTask);
taskRouter.put("/update/:id" , updateTask);
