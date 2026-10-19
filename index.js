require("dotenv").config()
const dns = require("node:dns").setServers(["8.8.8.8" , "1.1.1.1"])
const express = require("express")
const mongoose = require("mongoose")
const dbconfig = require("./config/dbconfig")
const app = express()
app.use(express.json())
const UserModel = require("./model/UserModel")
const authcontroller = require("./controller/authcontoller")

const port = process.env.PORT || 3000
const router = require("./router")
dbconfig()

app.use(router)


app.listen(port ,()=>{
  console.log(`server is running ${port}`);
  
})