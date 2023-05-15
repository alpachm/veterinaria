const express = require("express")

const petsController = require("../controllers/pets.controller")

const router = express.Router()


router
.get("/",petsController.findAll)

module.exports = router