const catchAsync = require('../utils/catchAsync');
const TreatmentsServices = require('../services/treatments.service');

const treatmentsServices = new TreatmentsServices();

exports.findAllTreatments = catchAsync(async (req, res, next) => {
  const treatments = await treatmentsServices.findAll();

  res.status(200).json({
    status: 'Success',
    results: treatments.length,
    treatments,
  });
});

exports.createTreatments = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { description, init_date, end_date } = req.body;

  const treatment = await treatmentsServices.createTreatments({
    description,
    init_date,
    end_date,
    clinic_history_id: id,
  });

  return res.status(201).json({
    status: 'success',
    message: 'The treatment has been created 🍴',
    treatment,
  });
});

exports.findOneTreatments = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const treatment = await treatmentsServices.findOne(id);

  res.status(200).json({
    status: 'Success',
    treatment,
  });
});

exports.updateTreatments = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { description } = req.body;

  const treatment = await treatmentsServices.findOne(id);
  const treatmentUpdate = await treatmentsServices.update(treatment, {
    description,
  });

  res.status(200).json({
    status: 'Success',
    message: 'The treatments haas been update 🍬',
    treatmentUpdate,
  });
});

exports.deleteTreatments = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const deletedTreatment = await treatmentsServices.delete(id);

  res.status(200).json({
    status: 'Success',
    message: 'The treatments haas been deleted 🍬',
    deletedTreatment,
  });
});
