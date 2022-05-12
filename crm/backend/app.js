const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const req=require("request");
const app = express();
const axios=require("axios")
require("dotenv").config();
let customerRouter=require('./routes/customers')
mongoose
  .connect(process.env.DATABASE_URL) // read environment varibale from .env
  .then(() => {
    console.log("Database connection Success!");
  })
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

app.use(cors());
app.use(express.json()); //access request body as req.body
app.use(morgan("dev")); //enable incoming request logging in dev mode

app.use('/customers',customerRouter)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server started listening on port : ", PORT);
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
