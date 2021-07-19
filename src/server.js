"use strict";

import express from "express";

const PORT = 4000;
const app = express();

const pathLogger = (req, res, next) => {
  console.log("PATH : ", req.path);
  next();
};

const methodLogger = (req, res, next) => {
  console.log("Method : ", req.method);
  next();
};

const home = (req, res) => res.send("<h1>Hello Home</h1>");

app.use(methodLogger, pathLogger);
app.get("/", home);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
