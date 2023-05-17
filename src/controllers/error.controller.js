const sendErrorDev = (err, res) => {
  res.status(400).json({
    status: err.statusCode,
    message: err.message,
    stack: err.stack,
    err,
  });
};

const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'fail';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  }
};

module.exports = globalErrorHandler;
