export const ErrorHandler = (err, req, res, next) => {
    // Default to a 500 Internal Server Error
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';
    let data = err.data || null;

    // Log error for debugging
    console.log("Error caught in handler:");
    console.log("- Type:", err.constructor.name);
    console.log("- Message:", err.message);
    console.log("- StatusCode:", err.statusCode);

    // 1. Handle CustomError (HIGHEST PRIORITY)
    if (err.name === 'CustomError' || err.statusCode) {
        statusCode = err.statusCode;
        message = err.message;
    }
    // 2. Handle Mongoose CastError (e.g., invalid ID format)
    else if (err.name === 'CastError' && err.kind === 'ObjectId') {
        statusCode = 404;
        message = `Resource not found with ID of ${err.value}`;
    }
    // 3. Handle Mongoose Duplicate Key Error
    else if (err.code === 11000) {
        statusCode = 400;
        message = `Duplicate field value entered: ${Object.keys(err.keyValue)}`;
    }
    // 4. Handle Mongoose Validation Error
    else if (err.name === 'ValidationError') {
        statusCode = 400;
        message = 'Mongoose validation failed';
        data = Object.values(err.errors).map(val => ({ [val.path]: val.message }));
    }

    // Send the standardized error response
    res.status(statusCode).json({
        success: false,
        error: {
            message: message,
            code: statusCode,
            // Only include 'data' if it exists
            ...(data && { details: data }),
            // Optional: Include stack trace ONLY in development
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
        },
    });
};