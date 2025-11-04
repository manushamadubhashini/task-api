import mongoose from "mongoose";

const taskModel = mongoose.Schema({
    id : {
        type : String,
        required : true,
        unique : true
    },

    title : {
        type : String,
        trim : true,
        required : [true , "title is required"],
        minlength : [3 , "title must be at least 3 characters long"],
        maxlength : [100 , "title must be at most 100 characters long"]
    },
     
    description : {
        type : String,
        trim : true,
        maxlength : [500 , "description must be at most 500 characters long"],
        default : ""

    },

    status : {
        type : String,
        enum : ["pending", "in-progress", "completed"],
        default : "pending",
        required : [true , "status is required"]
    }},

    {
       timestamps : true
    
   }
);

export default mongoose.model("Tasks", taskModel)