import { Request, Response } from "express";
import Task from "../modals/task.modal";
import catchAsync from "../utils/catchAsync";

export const createTask = catchAsync(async (req: Request, res: Response) => {
  const newTask = await Task.create({
    userId: req.user._id.toString(),
    description: req.body.description,
    status: req.body.status,
    dueDate: req.body.dueDate,
  });

  res.status(201).json({
    status: "success",
    data: {
      task: newTask,
    },
  });
});

export const getAllTasks = catchAsync(async (req: Request, res: Response) => {
  const id = req.user._id.toString();
  // console.log(filter);
  const filter = { userId: "63bdccabd03f1f5dc2433201" };
  const allTasks = await Task.findById(filter);

  res.status(201).json({
    status: "success",
    data: {
      tasks: allTasks,
    },
  });
});
