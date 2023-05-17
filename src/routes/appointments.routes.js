const express = require("express")

const appointmentsController = require("../controllers/appointments.controller")

const router = express.Router()

router
.post ("/:id", appointmentsController.createAppointments)



module.exports  = router 