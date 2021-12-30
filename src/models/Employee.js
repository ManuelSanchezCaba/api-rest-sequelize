const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Employee = sequelize.define(
	'employees',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
		},
		idCareer: {
			type: DataTypes.INTEGER,
		},
		idDepartment: {
			type: DataTypes.INTEGER,
		},
	},
	{
		timestamps: false,
	}
);

module.exports = Employee;
