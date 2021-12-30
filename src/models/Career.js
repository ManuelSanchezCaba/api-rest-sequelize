const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const employeeModel = require('./Employee');

const Career = sequelize.define(
	'careers',
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

Career.hasMany(employeeModel, { foreignKey: 'idCareer', sourceKey: 'id' });
employeeModel.belongsTo(Career, { foreignKey: 'idDepartment', sourceKey: 'id' });

module.exports = Career;
