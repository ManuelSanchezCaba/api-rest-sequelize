const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const employeeModel = require('./Employee');

const Department = sequelize.define(
	'department',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		descr: {
			type: DataTypes.STRING,
		},
	},
	{
		timestamps: false,
	}
);

Department.hasMany(employeeModel, { foreignKey: 'idDepartment', sourceKey: 'id' });
employeeModel.belongsTo(Department, { foreignKey: 'idDepartment', sourceKey: 'id' });

module.exports = Department;
