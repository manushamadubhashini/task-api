// define custom error class to handle errors more effectively
class CustomError extends Error {   
    constructor(message, statusCode, data = null) {
        super(message);
        this.statusCode = statusCode;
        this.data = data; // Useful for passing validation errors or other structured data
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = { CustomError };