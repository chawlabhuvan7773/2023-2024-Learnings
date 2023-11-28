const {
  constants: {
    VLIDATION_ERROR,
    SERVER_ERROR,
    NOT_FOUND,
    UNAUTHORIZED,
    FORBIDDEN,
  },
} = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case VLIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case NOT_FOUND:
      res.json({
        title: "NOT Found",
        message: err.message,
        stackTrace: err.stack,
      });
    case UNAUTHORIZED:
      res.json({
        title: "NOT UNAUTHORIZED",
        message: err.message,
        stackTrace: err.stack,
      });
    case FORBIDDEN:
      res.json({
        title: "For Bidden",
        message: err.message,
        stackTrace: err.stack,
      });
    case SERVER_ERROR:
      res.json({
        title: "Server ERROR",
        message: err.message,
        stackTrace: err.stack,
      });
    default:
      console.log("NO Error, ALL good");
      break;
  }
};

module.exports = errorHandler;
