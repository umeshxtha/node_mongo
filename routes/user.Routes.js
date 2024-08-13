const express = require('express');
const { model } = require('mongoose');
const userRouter = express.Router();
const {userCreate}=require('../controller/userController')

// userRouter.get("/find",userFind)
// userRouter.delete("/delete",deleteUser)
userRouter.post("/create",userCreate)
// userRouter.put("/edit",editUser)

module.exports = userRouter;
