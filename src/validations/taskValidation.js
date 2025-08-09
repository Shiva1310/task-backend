// validations/taskValidation.js
import Joi from "joi";

export const createTaskValidation = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().min(10).required(),
  status: Joi.string().valid("pending", "in-progress", "completed").optional(),
  dueDate: Joi.date().required(),
});

export const updateTaskValidation = Joi.object({
  title: Joi.string().min(3).optional(),
  description: Joi.string().min(10).optional(),
  status: Joi.string().valid("pending", "in-progress", "completed").optional(),
  dueDate: Joi.date().optional(),
});
