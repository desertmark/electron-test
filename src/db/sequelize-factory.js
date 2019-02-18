const path = require('path');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: path.resolve(path.join(__dirname, './db.sqlite'))
});

module.exports = sequelize;