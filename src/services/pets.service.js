const db = require("../database/models/index")
const AppError = require("../utils/appError")


class PetsServices {
    async findAll() {
        const pets = await db.Pets.findAll({
            where: {
                status: true
            }
        })
        return pets
    }

    async createPet(data, res) {
        try {
            const pet = await db.Pets.create(data)

            return pet
            
        } catch (error) {
            return res.status(500).json({
                status: "fail",
                error
            })
                
            }
        }

        // async findOne(petId) {
        //     try {
        //         const pet = await db.Pets.findOne({
        //           where: {
        //             status: true,
        //             id: petId,
        //           },
        //         });
          
        //         if (!pet) throw new AppError(`Vet whit id: ${petId} not found`, 404);
          
        //         return pet;
        //       } catch (error) {
        //         throw Error(error);
        //       }
        // }
       
    }


module.exports = PetsServices