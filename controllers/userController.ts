import { Request, Response } from "express";
import Task from "../modals/task.modal";
import catchAsync from "../utils/catchAsync";

export const createUser = catchAsync(async (req: Request, res: Response) => {
  res.send("user is created");
});
