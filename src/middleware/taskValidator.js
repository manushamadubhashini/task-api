import { CustomError } from "../utils/customError.js";

// Validate Create Task
export const validateCreateTask = (req, res, next) => {
  const { title, description, status } = req.body;
  const errors = [];

  // Check required fields
  if (!title || title.trim() === "") {
    errors.push("Title is required");
  }

  // Validate title length
  if (title && title.trim().length < 3) {
    errors.push("Title must be at least 3 characters long");
  }

  if (title && title.length > 100) {
    errors.push("Title must not exceed 100 characters");
  }

  // Validate description (optional but if provided, check length)
  if (description && description.length > 500) {
    errors.push("Description must not exceed 500 characters");
  }

  // Validate status (if provided) - matches model enum
  const validStatuses = ["pending", "in-progress", "completed"];
  if (status && !validStatuses.includes(status)) {
    errors.push(`Status must be one of: ${validStatuses.join(", ")}`);
  }

  // If there are validation errors, throw CustomError
  if (errors.length > 0) {
    return next(new CustomError(errors.join("; "), 400));
  }

  next();
};

// Validate Update Task
export const validateUpdateTask = (req, res, next) => {
  const { title, description, status } = req.body;
  const errors = [];

  // Check if at least one field is provided for update
  if (title === undefined && description === undefined && status === undefined) {
    return next(new CustomError("At least one field (title, description, status) is required for update", 400));
  }

  // Validate title if provided
  if (title !== undefined) {
    if (typeof title !== "string" || title.trim() === "") {
      errors.push("Title cannot be empty");
    } else {
      if (title.trim().length < 3) {
        errors.push("Title must be at least 3 characters long");
      }
      if (title.length > 100) {
        errors.push("Title must not exceed 100 characters");
      }
    }
  }

  // Validate description if provided
  if (description !== undefined) {
    if (typeof description !== "string") {
      errors.push("Description must be a string");
    } else if (description.length > 500) {
      errors.push("Description must not exceed 500 characters");
    }
  }

  // Validate status if provided - matches model enum
  const validStatuses = ["pending", "in-progress", "completed"];
  if (status !== undefined && !validStatuses.includes(status)) {
    errors.push(`Status must be one of: ${validStatuses.join(", ")}`);
  }

  // If there are validation errors, throw CustomError
  if (errors.length > 0) {
    return next(new CustomError(errors.join("; "), 400));
  }

  next();
};

// Validate Task ID parameter
export const validateTaskId = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return next(new CustomError("Task ID is required", 400));
  }

  // Check if it's a valid custom ID format (T001, T002, etc.) or MongoDB ObjectId
  const customIdPattern = /^T\d{3,}$/;
  const isValidCustomId = customIdPattern.test(id);
  const isValidObjectId = /^[a-f\d]{24}$/i.test(id);

  if (!isValidCustomId && !isValidObjectId) {
    return next(new CustomError("Invalid Task ID format. Expected: T001 or valid MongoDB ObjectId", 400));
  }

  next();
};