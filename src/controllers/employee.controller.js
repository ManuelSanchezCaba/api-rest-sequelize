const res = require('express/lib/response');
const employeeModel = require('../models/Employee');

const getAllEmployees = async (req, res) => {
	try {
		const employees = await employeeModel.findAll();
		res.json(employees);
	} catch (error) {
		res.json(error);
	}
};

const getEmployeeByID = async (req, res) => {
	try {
		const { id } = req.params;
		const employee = await employeeModel.findByPk(id);
		res.json(employee);
	} catch (error) {
		res.json(error);
	}
};

const createEmployee = async (req, res) => {
	try {
		const { name, idCareer, idDepartment } = req.body;
		await employeeModel.create({
			name,
			idCareer,
			idDepartment,
		});
		res.send('Employee Created');
	} catch (error) {
		res.json(error);
	}
};

const updateEmployee = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, idCareer, idDepartment } = req.body;
		const [result] = await employeeModel.update(
			{
				name,
				idCareer,
				idDepartment,
			},
			{
				where: {
					id,
				},
			}
		);

		if (result === 1) {
			res.send('Employee Updated');
		} else {
			res.send('Employee Not Exist');
		}
	} catch (error) {
		res.json(error);
	}
};

const deleteEmployee = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await employeeModel.destroy({
			where: {
				id,
			},
		});

		if (result === 1) {
			res.send('Employee Deleted');
		} else {
			res.send('Employee Not Exist Or Was Deleted');
		}
	} catch (error) {
		res.json(error);
	}
};

module.exports = {
	getAllEmployees,
	getEmployeeByID,
	createEmployee,
	updateEmployee,
	deleteEmployee,
};
