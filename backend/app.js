require('express-async-errors')
const express = require("express");
const morgan = require("morgan");
const { errorHandler } = require('./middlewares/error');
require('dotenv').config()
require('./db')
const cors=require('cors')
const userRouter = require("./routes/user");

const app = express();
app.use(express.json())
app.use(morgan('dev'))
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*',cors);
  // Add other CORS headers if needed
  next();
});
app.use("/api/user", userRouter);
app.use(errorHandler)

app.get("/", (req, res) => {
  res.status(200).json("Sucessfully connected");
});

app.listen(8000, () => {
  console.log("the port is listening on port 8000");
});
