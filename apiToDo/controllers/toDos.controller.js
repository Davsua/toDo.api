const { Todos } = require('../models/toDos.model');
const { filterObj } = require('../utils/filterObj');

exports.getAllTodos = async (req, res) => {
  try {
    const toDos = await Todos.findAll();

    res.status(200).json({
      status: 'succes',
      data: { toDos }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.createNewTodo = async (req, res) => {
  try {
    const todo = req.body.todo;
    const user = req.body.user;

    const newTodo = await Todos.create({
      todo: todo,
      user: user
    });

    res.status(201).json({
      status: 'success',
      data: {
        newTodo
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id;

    const data = filterObj(req.body, 'todo', 'user');

    const todo = await Todos.findOne({ where: { id: id } });

    if (!todo) {
      res.status(400).json({
        status: 'bad request',
        message: 'todo not founded'
      });
      return;
    }

    await todo.update({ ...data });

    res.status(204).json({
      status: 'succes'
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;

    const todo = await Todos.findOne({ where: { id: id } });

    if (!todo) {
      res.status(400).json({
        status: 'bad request',
        message: 'todo doesnt find, invalid id'
      });
      return;
    }

    await todo.destroy();

    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};
