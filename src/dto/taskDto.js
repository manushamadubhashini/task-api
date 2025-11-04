import { status } from "express/lib/response";
import { title } from "process";

export const TaskDto ={
    id : String,
    title : String,
    description : String,
    status : String,
    
}