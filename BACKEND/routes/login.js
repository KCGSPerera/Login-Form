const express = require('express');
const { registerUser, updateUser, getUserCtrl, getUsersCtrl, deleteUser } = require('../controller/loginCtrl');

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.put("/:id", updateUser);
userRouter.get("/:id", getUserCtrl);
userRouter.get("/", getUsersCtrl);
userRouter.delete("/:id", deleteUser);


module.exports = userRouter;