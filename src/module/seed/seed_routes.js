const express =require('express');
const { seedController } = require('./seed_controller');

const seedRoutes =express.Router();

seedRoutes.get('/',seedController);


module.exports =seedRoutes;