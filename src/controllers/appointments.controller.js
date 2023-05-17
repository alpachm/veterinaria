const catchAsync = require('../utils/catchAsync');
const AppointmentsServices = require('../services/appointments.service');


const appointmentsServices  = new AppointmentsServices()


exports.createAppointments = catchAsync( async ( req, res , next  )=> {
       const {id} = req.params
 const { date, reason , vet_id  } =req.body 
 const appointments= await  appointmentsServices.createAppointments(  {
        date,
         reason ,
          vet_id  ,
          pet_id: id
})
return res.status( 201 ).json({
 status: 'success',
appointments
})

}) 
