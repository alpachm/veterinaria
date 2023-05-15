const db = require("../database/models/index")

class petsServices {
    async findAll() {
        const pets = await db.Pets.findAll({
            where: {
                status: true
            }
        })
        return pets
    }
}

module.exports = petsServices 