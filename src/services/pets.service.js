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
       
    }


module.exports = PetsServices