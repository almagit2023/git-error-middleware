const { constants } = require("./constants");


const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode ? err.statusCode : 500;
  const errorName = constants[statusCode];
  if (errorName) {
    res.status(statusCode).json({ title: errorName, message: err.message, stackTrace: err.stack });
  } else {
    console.error("Unknown Error Code:", statusCode);
    res.status(500).json({ title: "Server Error", message: "An unknown error occurred", stackTrace: err.stack });
  }
  next();
}
module.exports = errorHandler;
