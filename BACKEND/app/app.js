const express =  require('express');
const morgan = require('morgan');
const userRouter = require('../routes/login');

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/v1/users", userRouter);

module.exports = app;