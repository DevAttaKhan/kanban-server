import { Router } from "express";
import {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/taskController";
import { protect } from "../controllers/authController";

const router = Router();

router.route("/").get(protect, getAllTasks).post(protect, createTask);

router.route("/:id").get(protect, getTask).patch(protect, updateTask);

export default router;
