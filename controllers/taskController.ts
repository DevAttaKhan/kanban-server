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
  const id = req.user._id;
  const filter = { userId: id };
  const allTasks = await Task.find(filter);

  res.status(201).json({
    status: "success",
    data: {
      tasks: allTasks,
    },
  });
});

export const getTask = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const task = await Task.findById(id);

  res.status(200).json({
    status: "success",
    data: {
      task,
    },
  });
});

export const updateTask = catchAsync(async (req: Request, res: Response) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      task: updatedTask,
    },
  });
});

export const deleteTask = catchAsync(async (req: Request, res: Response) => {
  const deletedTask = await Task.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: {
      task: deletedTask,
    },
  });
});
