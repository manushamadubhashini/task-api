import taskModel from "../models/taskModel.js";

export const getAllTasks = async () => {
  return await taskModel.find();
};

export const createTask = async (task) => {
  // Generate a unique ID for the new task
  const lastTask = await taskModel.findOne().sort({ id: -1 });
  let newId = "T001";
  if (lastTask && lastTask.id) {
    const lastNum = parseInt(lastTask.id.replace("T", ""));
    const nextNum = lastNum + 1;
    newId = "T" + nextNum.toString().padStart(3, "0");
  }
  const newTask = { ...task, id: newId };
  return await taskModel.create(newTask);
};

export const deleteTaskById = async (id) => {
  return await taskModel.findOneAndDelete({id : id});
};

export const updateTaskById = async (id, task) => {
  return await taskModel.findOneAndUpdate({id:id},task,{new : true})
};
