const express = require("express")

const userController = require("../controllers/users.controller")

const router = express.Router()

router
.post("/", userController.create)

router
.get("/pets",userController.findAll)

router
.get("/pets/:id", userController.findOne)

router
.route("/:id")
.patch(userController.update)
.delete(userController.delete)

module.exports = router