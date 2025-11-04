import mongoose from "mongoose";

const taskModel = mongoose.Schema({
    id : {
        type : String,
        required : true,
        unique : true
    },

    title : {
        type : String,
        required : true
    },
     
    description : {
        type : String,

    },

    status : {
        type : String,
        enum : ["pending", "in-progress", "completed"],
        default : "pending",
        required : true
    }},

    {
       timestamps : true
    
   }
);

export default mongoose.model("Tasks", taskModel)