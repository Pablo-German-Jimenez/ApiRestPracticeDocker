import mongoose, {Schema} from "mongoose";

const taskSchema = new Schema({
    taskName:{
        type: String
    }
})