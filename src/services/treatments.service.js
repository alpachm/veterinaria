const db = require('../database/models/index');
const AppError = require('../utils/appError');

class TreatmentsServices {
  async findAll() {
    const treatments = await db.Treatment.findAll({
      where: {
        status: 'active',
      },
    });
    return treatments;
  }

  async createTreatments(data) {
    const treatment = await db.Treatment.create(data, {
      include: [
        {
          model: db.Clinic_history,
        },
      ],
    });
    return treatment;
  }

  async findOne(treatmentId) {
    const treatment = await db.Treatment.findOne({
      where: {
        id: treatmentId,
        status: 'active',
      },
    });
    if (!treatment)
      throw new AppError(`treatment with id ${treatmentId} not found`);
    return treatment;
  }

  async update(treatment, treatmentData) {
    return await treatment.update(treatmentData);
  }

  async delete(treatmentId) {
    const treatment = await this.findOne(treatmentId);

    return await treatment.update({ status: 'disabled' });
  }
}

module.exports = TreatmentsServices;
