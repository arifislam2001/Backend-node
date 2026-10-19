const express = require("express")

const router = express.Router()

const authcontoller = require("../../controller/authcontoller")

router.post("/registation" , authcontoller.registation)

router.get("/alluser" , authcontoller.getuser )


router.post("/login" , authcontoller.userlogin)


module.exports = router

