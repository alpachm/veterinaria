//const db = require("../database/models/index")
const catchAsync = require('../utils/catchAsync');
const PetsServices = require('../services/pets.service');

const petsServices = new PetsServices();

exports.findAll = catchAsync(async (req, res, next) => {
  const pets = await petsServices.findAll();

  return res.status(200).json({
    status: 'success',
    pets,
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const { name, birthdate, specie, race, weight, user_id, petImgUrl } =
    req.body;

  const pet = await petsServices.createPet(
    {
      name,
      birthdate,
      specie,
      race,
      weight,
      user_id,
      petImgUrl,
    },
    res
  );

  return res.status(201).json({
    status: 'success',
    pet,
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const { name, race, weight, heigth } = req.body;

  const pet = await petsServices.updatePet(
    {
      name,
      race,
      weight,
      heigth,
    },
    res
  );

  return res.status(201).json({
    status: 'success',
    message: 'the pet has been updated',
    pet,
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  await petsServices.deletePetById(id);

  return res.status(201).json({
    status: false,
    message: 'the pet has been deleted',
  });
});
