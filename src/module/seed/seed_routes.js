const express =require('express');
const { seedController } = require('./seed_controller');
const verifyToken = require('../../middleware/verify_token_middleware');

const seedRoutes =express.Router();

seedRoutes.get('/',seedController);


module.exports =seedRoutes;