const catchAsync = require("../utils/catchAsync")
const UsersServices = require("../services/users.service")

const usersServices = new UsersServices()

exports.findAll = catchAsync(async(req, res, next) => {
    const users = await usersServices.findAll()

    return res.status(200).json({
        statuc: "succes",
        results: users.length,
        users
    })
})