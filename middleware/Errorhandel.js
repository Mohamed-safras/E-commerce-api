// not found

const notFound = (req, res, next) => {
  const error = new Error(`Not Found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  res.json({
    message: err.message,
    success: false,
  });
};

module.exports = {
  notFound,
  errorHandler,
};
