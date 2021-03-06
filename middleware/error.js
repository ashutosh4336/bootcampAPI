const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log to console for DEV
  console.log(err.stack.red);

  // Mongoose bad ObjectID
  if (err.name === 'CastError') {
    const message = `Resource not found with I'd of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // Mongoose Duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field Entered';
    error = new ErrorResponse(message, 400);
  }

  // Mpngoose validationError
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(value => value.message);
    error = new ErrorResponse(message, 400);
  }
  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || 'Server Error' });
};

module.exports = errorHandler;
