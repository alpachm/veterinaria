const db = require("../database/models/index")
const AppError = require("../utils/appError")
class AppointmentsServices{
    async createAppointments(data) {
        try {
          const appointment = await db.Appointments.create(data);
          
          return appointment;
        } catch (error) {
          
         throw Error (error)
        }
      }
}

module.exports = AppointmentsServices;