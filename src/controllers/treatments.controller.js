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

exports.createTreatments = catchAsync(async (req, res, next) => {});

exports.findOneTreatments = catchAsync(async (req, res, next) => {});

exports.updateTreatments = catchAsync(async (req, res, next) => {});

exports.deleteTreatments = catchAsync(async (req, res, next) => {});
