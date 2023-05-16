const express = require("express")

const petsController = require("../controllers/pets.controller")

const router = express.Router()


router
.get("/",petsController.findAll)

router
.post("/", petsController.create)

module.exports = router