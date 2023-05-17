const db = require("../database/models/index")
const AppError = require("../utils/appError")

class VetsServices {
    async findAll() {
        const vets = await db.Vets.findAll({
            where: {status: "active"}
        })

        return vets
    }

    async create(data) {
        try {
            const vet = await db.Vets.create(data)

        return vet
        } catch (error) {
            throw Error(error)
        }
        
    }

    async findOne(vetId) {
        try {
            const vet = await db.Vets.findOne({
              where: {
                status: 'active',
                id: vetId,
              },
            });
      
            if (!vet) throw new AppError(`Vet whit id: ${vetId} not found`, 404);
      
            return vet;
          } catch (error) {
            throw Error(error);
          }
    }

    async update(vet, vetData) {
        try {
            return await vet.update(vetData)
        } catch (error) {
            throw Error(error)
        }
    }

    async delete(vetId) {
        try {
           const vet = await this.findOne(vetId)

           return await vet.update({
            status: "disabled"
           })
        } catch (error) {
            throw Error(error)
        }
    }
}

module.exports = VetsServices