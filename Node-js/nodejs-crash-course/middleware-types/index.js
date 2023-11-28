const express = require("express");
const router = express.Router(); // Built IN middleware from express
const path = require("path"); // Node Js Package
const logger = require("morgan"); // This page is for logger which provide more scaleablity on that
const multer = require("multer"); // Multer  is used for uploading the file and getting from the client and provide facility to store in the bucket and in public folder as well
const upload = multer({ dest: "./public/uploads" }); // In this we have
const app = express();
const port = 5001;
app.use(express.json()); // That will allow to get you body from the client
app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static(path.join(__dirname, "public"))); // This middleware allowed to load the static images from the local and load the __dirname as well

app.use(
  "/upload",
  upload.single("image"),
  (req, res) => {
    console.log(req.file, req.body);
    res.send(req.file);
  },
  (err, req, res, next) => {
    res.statusCode(400).send({ err: err.message });
  }
); // image api

// Logger MiffleWare Added
const loggerMiddlewWare = (req, res, next) => {
  console.log(`${new Date()}---Request [${req.method}] [${req.url}]`);
  next();
};
app.use(loggerMiddlewWare);
app.use(logger("combined"));

// Users route defined in the router
app.use("/api/users", router);

// Auth Checker MiddleWare we have added
const fakeAuth = (req, res, next) => {
  const authStatus = false;
  if (authStatus) {
    console.log("User AuthStatus", authStatus);
    next();
  } else {
    res.status(401);
    throw new Error("Users is not authorized");
  }
  return;
};
router.use(fakeAuth);
// API Routes
const getUsers = (req, res, next) => {
  res.json({ message: "Get all Users" });
};
const createUser = (req, res, next) => {
  res.json({ message: "Get all createUser" });
};
router.route("/").get(getUsers).post(createUser);

// Error Handler Middleware Added
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  switch (statusCode) {
    case 401:
      res.json({
        title: "UnAuthorized",
        message: err.message,
      });
      break;
    case 404:
      res.json({
        title: "Not Found",
        message: err.message,
      });
      break;
    case 500:
      res.json({
        title: "UnAuthorized",
        message: err.message,
      });
      break;
  }
};

app.all("*", (req, res) => {
  res.status(404);
  throw new Error("Route Not Found");
});

// Third party Middleware logger
app.use(errorHandler);
app.listen(port, () => {
  console.log("Example app listing on port ${port}", port);
});
