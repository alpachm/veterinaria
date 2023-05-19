const express = require('express');

//Controllers
const treatmentsController = require('../controllers/treatments.controller');

//Middlewares
const validationMiddlewares = require('../middlewares/validations.middleware');

const router = express.Router();

router.get('/', treatmentsController.findAllTreatments);

router
  .route('/:id')
  .post(
    validationMiddlewares.treatmentCreateValidation,
    treatmentsController.createTreatments
  )
  .get(treatmentsController.findOneTreatments)
  .patch(treatmentsController.updateTreatments)
  .delete(treatmentsController.deleteTreatments);

module.exports = router;
