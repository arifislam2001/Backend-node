const express = require("express")

const router = express.Router()

const authrouter = require("./api/index")

const api = process.env.BASE_URL || `/api/v1`


router.use(api , authrouter)

module.exports = router