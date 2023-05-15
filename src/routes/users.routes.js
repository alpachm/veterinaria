const express = require("express")

const userController = require("../controllers/users.controller")

const router = express.Router()

router

.get("/pets",userController.findAll)

module.exports = router