import { Router } from "express";
import { createUser } from "../controllers/userController";
import { signup, login } from "../controllers/authController";
const router = Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;
