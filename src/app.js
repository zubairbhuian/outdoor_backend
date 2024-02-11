const express = require('express');
const bodyParser = require("body-parser");
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");
const morgam = require("morgan");
const createError = require("http-errors");
const multer = require("multer");
const seedRoutes = require('./module/seed/seed_routes');
const authRoutes = require('./module/auth/auth_routes');
const todoRoutes = require('./module/todo/todo_route');
const { errorResposnse } = require('./helper/resposnse');

const app = express();

// 
const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 100, // 1 minute
    max: 5,
    message: "Too many reuests from this IP",
});

app.use(xssClean());
app.use(rateLimiter);
app.use(morgam("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// route 
app.use('/', seedRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/todo', todoRoutes)


// client Error handeling
app.use((req, res, next) => {
    next(createError(404, "route not found"));
});

// server Error handeling
app.use((err, req, res, next) => {
    // return res.status(err.status || 500).json({
    //   success: false,
    //   menubar: err.message,
    // });

    return errorResposnse(res, {
        statusCode: err.status,
        message: err.message,
    });
});



module.exports = app;

