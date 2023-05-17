const express = require("express")

const vetsController = require("../controllers/vets.controller")

const router = express.Router()

router.get("/", vetsController.findAll)

router.get("/:id", vetsController.findOne)

router.post("/signup", vetsController.create)

router
.route("/:id")
.patch(vetsController.update)
.delete(vetsController.delete)

module.exports = router