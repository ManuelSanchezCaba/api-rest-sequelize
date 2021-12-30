const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const UserRole = sequelize.define(
	'user_roles',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: true,
		},
		idUser: {
			type: DataTypes.INTEGER,
		},
		idRole: {
			type: DataTypes.INTEGER,
		},
	},
	{
		timestamps: false,
	}
);

module.exports = UserRole;
