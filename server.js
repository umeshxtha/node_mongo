const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const userRouter = require('./routes/user.Routes');

// using express
const app = express();
dotenv.config()
app.use('/',userRouter)
mongoose.connect(process.env.db).then(()=>{
    console.log('connected to db')
})
app.post('/login',(req,res)=>{
    res.send('hello world')
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
    console.log(process.env.db)
})