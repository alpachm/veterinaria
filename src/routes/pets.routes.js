const express = require('express');

//controllers
const petsController = require('../controllers/pets.controller');

//middlewares
const validationsMiddleware = require('../middlewares/validations.middleware');

const router = express.Router();

router.get('/', petsController.findAll);

router.post(
  '/',
  validationsMiddleware.createPetValidation,
  petsController.create
);

router
  .route('/:id')
  .patch(validationsMiddleware.updatePetValidation, petsController.update)
  .delete(petsController.delete);

  module.exports = router;
