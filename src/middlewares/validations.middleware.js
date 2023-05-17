const { body, validationResult } = require('express-validator');

const validFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errors: errors.mapped(),
    });
  }

  next();
};

exports.createPetValidation = [
  body('name').notEmpty().withMessage('Name cannot be empty'),
  body('birthdate').notEmpty().withMessage('Birthdate cannot be empty'),
  body('genre').notEmpty().withMessage('Genre cannot be empty'),
  body('specie').notEmpty().withMessage('Specie cannot be empty'),
  body('race').notEmpty().withMessage('Race cannot be empty'),
  body('weigth').notEmpty().withMessage('Weigth cannot be empty'),
  body('heigth').notEmpty().withMessage('Heigth cannot be empty'),
  body('petImgUrl').notEmpty().withMessage('PetImgUrl cannot be empty'),
  validFields,
];

exports.updatePetValidation = [
  body('name').notEmpty().withMessage('Name cannot be empty'),
  body('race').notEmpty().withMessage('Race cannot be empty'),
  body('weigth').notEmpty().withMessage('Weigth cannot be empty'),
  body('heigth').notEmpty().withMessage('Heigth cannot be empty'),
  validFields,
];
