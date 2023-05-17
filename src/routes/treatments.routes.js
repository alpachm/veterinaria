const express = require('express');

//Controllers
const treatmentsController = require('../controllers/treatments.controller');

const router = express.Router();

router.get('/', treatmentsController.findAllTreatments);

router
  .route('/:id')
  .post(treatmentsController.createTreatments)
  .get(treatmentsController.findOneTreatments)
  .patch(treatmentsController.updateTreatments)
  .delete(treatmentsController.deleteTreatments);

module.exports = router;
