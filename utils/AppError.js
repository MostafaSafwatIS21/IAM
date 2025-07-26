class AppError extends Error {
  constructor(message, statusCode) {
    console.log(`AppError: ${message} with status code ${statusCode}`);

    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true; // This is an operational error, not a programming error
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
