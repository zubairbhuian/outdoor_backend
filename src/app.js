const express =require('express');
const bodyParser = require("body-parser");
const seedRoutes = require('./module/seed/seed_routes');
const authRoutes = require('./module/auth/auth_routes');
const todoRoutes = require('./module/todo/todo_route');

const app = express();

// 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// route 
app.use('/',seedRoutes)
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/todo',todoRoutes)



module.exports = app;

