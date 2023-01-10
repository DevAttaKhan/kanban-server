import mongoose, { Schema } from "mongoose";

const taskSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
  },
  description: {
    type: String,
    required: [true, "Plese Enter Description"],
  },
  status: {
    type: String,
    enum: ["todo", "inprogress", "done"],
    default: "todo",
  },
  dueDate: {
    type: Date,
  },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
