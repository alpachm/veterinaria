const db = require("../database/models/index")
const AppError = require("../utils/appError")

class UsersServices {
    async findAll() {
        const users = await db.Users.findAll({
            where: {
                status: "active",
            },
        })
        return users
    }
}

module.exports = UsersServices