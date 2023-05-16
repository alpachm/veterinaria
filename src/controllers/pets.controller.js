//const db = require("../database/models/index")
const catchAsync = require("../utils/catchAsync")
const PetsServices = require("../services/pets.service")

const petsServices = new PetsServices()

exports.findAll = catchAsync(async(req, res, next) => {
     const pets = await petsServices.findAll()

   return res.status(200).json({
        status: "success",
        pets
    })

})