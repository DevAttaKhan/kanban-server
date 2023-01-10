import { Router } from "express";
import { createTask, getAllTasks } from "../controllers/taskController";
import { protect } from "../controllers/authController";

const router = Router();

router.route("/").get(protect, getAllTasks).post(protect, createTask);

export default router;
