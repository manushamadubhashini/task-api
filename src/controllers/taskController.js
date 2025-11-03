import { request , response } from "express"
import res from "express/lib/response";
import * as taskService from "../services/taskService.js"

export const getAllTask =  async (request , response) =>{
  try {
    const tasks = await taskService.getAllTasks();
    response.status(200).json({message : "Tasks fetched successfully", data : tasks});

  }catch (error) {
    response.status(500).json({message : "Error while fetching tasks", error : error.message});
  }
}

export const createTask = async (request , response) => {
    try {
        const newTask = request.body;
        const createdTask = await taskService.createTask(newTask)
        response.status(201).json({message : "Task created successfully" , data : createdTask});

    }catch (error) {
        response.status(500).json({message : "Error while creating task", error : error.message});
    }
}

export const deleteTask = async (request , response) => {
    try {
        const taskId = request.params.id;
        const deleteTask = await taskService.deleteTaskById(taskId);

        if(!deleteTask) {
            return response.status(404).json({message : "Task not found"});
        }

        return response.status(200).json({message : "Task deleted successfully", data : deleteTask});

    }catch (error) {
        return response.status(500).json({message : "Error while deleting task", error : error.message});
    }
}

export const updateTask = async (request , response) => {
    try {
        const taskId = request.params.id;
        const taskData = request.body;
        const updateTask = await taskService.updateTaskById(taskId,taskData);
        if (!updateTask) {
            return response.status(400).json({message : "Task not found"});
        }

        return response.status(200).json({message : "Task updated successfully", data : updateTask})

    }catch (error) {
        return response.status(500).json({message : "Error while updating task", error : error.message})
    }
}