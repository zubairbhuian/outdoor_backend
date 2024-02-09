const express = require('express');
const { getTodoController, createTodoController, updateTodoController, deleteTodoController } = require('./todo_controller');


const todoRoutes = express.Router();

todoRoutes.get('/', getTodoController);
todoRoutes.post('/', createTodoController);
todoRoutes.put('/', updateTodoController);
todoRoutes.delete('/', deleteTodoController);


module.exports = todoRoutes;