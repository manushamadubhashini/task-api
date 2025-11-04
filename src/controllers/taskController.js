import { request , response } from "express"
import * as taskService from "../services/taskService.js"
import { CustomError } from "../utils/customError.js";

console.log("CustomError imported:", CustomError);


export const getAllTask =  async (request , response , next) =>{
  try {
    const tasks = await taskService.getAllTasks();
    response.status(200).json({message : "Tasks fetched successfully", data : tasks});

  }catch (error) {
    next(error)
  }
}

export const createTask = async (request , response , next) => {
    try {
        const newTask = request.body;
        const createdTask = await taskService.createTask(newTask)
        response.status(201).json({message : "Task created successfully" , data : createdTask});

    }catch (error) {
        next(error);
    }
}

export const deleteTask = async (request , response , next) => {
    try {
        const taskId = request.params.id;
        const deletedTask = await taskService.deleteTaskById(taskId);

        if(!deletedTask) {
            return next(new CustomError(`Task not found with ID: ${taskId}`, 404));
        }

        return response.status(200).json({message : "Task deleted successfully", data : deletedTask});

    }catch (error) {
         next(error);
    }
}

export const updateTask = async (request , response , next) => {
    try {
        const taskId = request.params.id;
        const taskData = request.body;
        const updatedTask = await taskService.updateTaskById(taskId,taskData);
        if (!updatedTask) {
            return next(new CustomError(`Task not found with ID: ${taskId}`, 404));
        }

        return response.status(200).json({message : "Task updated successfully", data : updatedTask})

    }catch (error) {
        next(error);
    }
}

export const getTaskById = async (request , response , next) => {
    try {
        const taskId = request.params.id;
        const task = await taskService.getTaskById(taskId);

        if(!task){
            return next (new CustomError(`Task not found with ID: ${taskId}` , 404));
        }
        return response.status(200).json({message : "Task fetched successfully" , data : task});
    }catch (error) {
        next(error);
    }
}