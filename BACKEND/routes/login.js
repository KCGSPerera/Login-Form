const express = require('express');
const { registerUser } = require('../controller/loginCtrl');

const userRouter = express.Router();

userRouter.post("/register", registerUser);

module.exports = userRouter;