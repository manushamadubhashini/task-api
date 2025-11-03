import { TaskDto } from "../dto/taskDto";
import taskModel from "../models/taskModel"

export const getAllTasks =  async () =>{
    return  await taskModel.find();
}

export const createTask =  async (TaskDto) => {
    return await taskModel.create(TaskDto)

}

export const deleteTaskById = async (id) => {
    return await taskModel.findByIdAndDelete(id);
}

export const updateTaskById = async (id, TaskDto) => {
    return await taskModel.findByIdAndUpdate(id, TaskDto, {new : true}); 
}
