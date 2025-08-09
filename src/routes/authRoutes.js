import express from "express";
import { loginUser, registerUser, refreshToken } from "../controllers/authController.js";
import { validate } from "../middlewares/validate.js";
import { registerValidation, loginValidation } from "../validations/authValidation.js";

const router = express.Router();
router.post("/register", validate(registerValidation), registerUser);
router.post("/login", validate(loginValidation), loginUser);
router.post("/refresh", refreshToken);

export default router;
