const { Sequelize } = require('sequelize');

const { DB_NAME, DB_NAME_TEST, NODE_ENV } = process.env;

const db_name = NODE_ENV === 'test' ? DB_NAME_TEST : DB_NAME;

const sequelize = new Sequelize(db_name, process.env.DB_USER, process.env.DB_PASS, {
	host: process.env.DB_HOST,
	dialect: 'mysql',
});

module.exports = sequelize;
