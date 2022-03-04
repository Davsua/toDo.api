const express = require('express');
const {
  getAllTodos,
  createNewTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/toDos.controller');

const router = express.Router();

// GET fetch all ToDos
// POST Create new ToDo
// PATCH Update ToDo given an ID
// DELETE Delete ToDo given an ID (destroy or soft delete)

router.get('/', getAllTodos);

router.post('/', createNewTodo);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTodo);

module.exports = { todosRouter: router };
