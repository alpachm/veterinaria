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
}

module.exports = PetsServices