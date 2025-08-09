import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { 
        type: String, 
        enum: ["pending", "in-progress", "completed"], 
        default: "pending" 
    },
    dueDate: { type: Date }, // New due date field
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    }
}, { timestamps: true });

export default mongoose.model("Task", taskSchema);
