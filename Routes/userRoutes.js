const express = require('express')
const { resetpassword, Signup, login } = require('../Controller/userController')

userRoutes.post('/Signup',Signup)
userRoutes.post('/login',login)
userRoutes.post('/resetpassword',resetpassword)


module.exports={userRoutes}
