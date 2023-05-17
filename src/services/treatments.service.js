const db = require('../database/models/index');

class TreatmentsServices {
  async findAll() {
    const treatments = await db.Treatment.findAll({
      where: {
        status: 'active',
      },
    });
    return treatments;
  }
}

//Hola estoy en service

module.exports = TreatmentsServices;
