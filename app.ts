import express from "express";
import taskRoutes from "./routes/taskRoute";
import userRoutes from "./routes/userRoute";
import cors from "cors";
const app = express();

interface User {
  _id: String;
  firstName: string;
  lastName: string;
  email: string;
  dueDate: string;
}

declare global {
  namespace Express {
    interface Request {
      user: User;
    }
  }
}

app.use(cors());
app.use(express.json());

app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/user", userRoutes);

export default app;
