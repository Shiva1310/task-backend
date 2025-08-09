import express from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { createTask, getTasks, getTask, updateTask, deleteTask } from "../controllers/taskController.js";
import { validate } from "../middlewares/validate.js";
import { createTaskValidation, updateTaskValidation } from "../validations/taskValidation.js";

const router = express.Router();

router.post("/createTask", verifyToken,validate(createTaskValidation), createTask);
router.get("/getTaskById", verifyToken, getTask);
router.get("/getAllTask", verifyToken, getTasks);
router.delete("/deleteTask", verifyToken,validate(updateTaskValidation), deleteTask);
router.put("updateTask",verifyToken,updateTask)

export default router;
