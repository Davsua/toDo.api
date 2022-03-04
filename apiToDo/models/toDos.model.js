const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');

const Todos = sequelize.define('todos', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  todo: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  user: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  status: {
    type: DataTypes.STRING(10),
    defaultValue: 'active'
  }
});

module.exports = { Todos };
