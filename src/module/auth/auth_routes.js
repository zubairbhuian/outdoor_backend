const express =require('express');
const { loginController, signUpController, forgetPassController, sendOTPController } = require('./auth_controller');


const authRoutes =express.Router();

authRoutes.post('/login',loginController);
authRoutes.post('/signUp',signUpController);
authRoutes.post('/forgetPassword',forgetPassController);
authRoutes.post('/sendOTP',sendOTPController);


module.exports =authRoutes;