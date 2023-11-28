const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
connectDb();
const app = express();

// Custom Handler MiddleWare
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

// BODY PARSER MIDDLE WARE
app.use(express.json());

// Defining DEFAULT API'S ROUTES
app.use("/api/contact", require("./routes/contactRoutes")); // Contact Route
app.use("/api/user", require("./routes/userRoutes")); // Contact Route

app.listen(process.env.PORT, () => {
  console.log("port:", process.env.PORT);
});
