const catchAsync = require("../utils/catchAsync")
const UsersServices = require("../services/users.service")
const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/jwt');

const usersServices = new UsersServices()

exports.findAll = catchAsync(async(req, res, next) => {
    const users = await usersServices.findAll()

    return res.status(200).json({
        status: "succes",
        results: users.length,
        users
    })
})

exports.create = catchAsync(async(req, res, next) => {
    const {name, surname, email, password, profileImgUrl} = req.body

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const user = await usersServices.create({
        name, surname, email, password: encryptedPassword, profileImgUrl
    },
    res
    )

  const token = await generateJWT(user.id);


    return res.status(201).json({
        status: "success",
        token,
        user: {
            name: user.name,
            surname: user.surname,
            email: user.email,
            profileImgUrl: user.profileImgUrl
        }
    })
})

exports.findOne = catchAsync(async(req, res, next) => {
    const {id} = req.params

    const user = await usersServices.findOne(id)

    return res.status(200).json({
        status: "success",
        user
    })
})

exports.update = catchAsync(async(req, res, next) => {
    const {id} = req.params
    const {name, surname, email} = req.body

    const user = await usersServices.findOne(id)

    const userUpdate = await usersServices.update(user, {
        name, surname, email
    })

    return res.status(200).json({
        status: "succes",
        userUpdate
    })
})

exports.delete = catchAsync(async (req, res, next) => {
    const {id} = req.params
    const userDeleted = await usersServices.delete(id)

    return res.status(200).json({
        status: "success",
        message: "Author deleted",
        userDeleted
    })
});