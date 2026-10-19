const express = require("express")

const router = express.Router()

const authrouter = require("./authrouter")


router.use("/auth" , authrouter)

module.exports = router