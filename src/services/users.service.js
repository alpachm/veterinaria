const db = require('../database/models/index');
const AppError = require('../utils/appError');

class UsersServices {
  async findAll() {
    const users = await db.Users.findAll({
      where: {
        status: 'active',
      },
      include: [
        {
          model: db.Pets,
        },
      ],
    });
    return users;
  }

  async create(data, res) {
    try {
      const user = await db.Users.create(data);

      return user;
    } catch (error) {
      return res.status(500).json({
        status: 'fail',
        error,
      });
    }
  }

  async findOne(userId) {
    try {
      const user = await db.Users.findOne({
        where: {
          status: 'active',
          id: userId,
        },
        include: [
          {
            model: db.Pets,
          },
        ],
      });

      if (!user) throw new AppError(`User whit id: ${userId} not found`, 404);

      return user;
    } catch (error) {
      throw Error(error);
    }
  }

  async update(user, userData) {
    try {
      return await user.update(userData);
    } catch (error) {}
  }

  async delete(userId) {

    const user = await this.findOne(userId)

    return await user.update({
     status: "disabled"
    })
 }
}

module.exports = UsersServices;
