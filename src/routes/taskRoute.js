import { Router } from "express";
import { getAllTask,createTask,deleteTask,updateTask, getTaskById } from "../controllers/taskController.js";
import { validateCreateTask, validateTaskId, validateUpdateTask } from "../middleware/taskValidator.js";

export const taskRouter = Router();
taskRouter.get("/getAll" , getAllTask);
taskRouter.post("/create" , validateCreateTask,createTask);
taskRouter.delete("/delete/:id" , validateTaskId , deleteTask);
taskRouter.put("/update/:id" , validateTaskId , validateUpdateTask , updateTask);
taskRouter.get("/get/:id" ,validateTaskId , getTaskById);