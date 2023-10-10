export const handleError = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  console.log(err.stack);

  res.status(statusCode).json({
    message: err.message,
    stack: err.stack,
    statusCode,
  });
};
