const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ispremiumuser: {type:Sequelize.BOOLEAN,
    defaultValue: false
  },
  totalexpense: {
    type: Sequelize.INTEGER,
    defaultValue: 0 
  },
}, {
  timestamps: false,
});

module.exports = User;
