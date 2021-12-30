const departmentModel = require('../models/Department');

const getAllDepartment = async (req, res) => {
	try {
		const departments = await departmentModel.findAll();
		res.json(departments);
	} catch (error) {
		res.json(error);
	}
};

const getDepartmentByID = async (req, res) => {
	try {
		const { id } = req.params;
		const department = await departmentModel.findByPk(id);
		res.json(department);
	} catch (error) {
		res.json(error);
	}
};

const createDepartment = async (req, res) => {
	try {
		const { descr } = req.body;
		await departmentModel.create({ descr });
		res.send('Department Created');
	} catch (error) {
		res.json(error);
	}
};

const updateDepartment = async (req, res) => {
	try {
		const { id } = req.params;
		const { descr } = req.body;

		const [result] = await departmentModel.update(
			{ descr },
			{
				where: { id: id },
			}
		);

		if (result === 1) {
			res.send('Department Updated');
		} else {
			res.send('Department Not Exist');
		}
	} catch (error) {
		res.json(error);
	}
};

const deleteDepartment = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await departmentModel.destroy({
			where: {
				id: id,
			},
		});

		if (result === 1) {
			res.send('Department Deleted');
		} else {
			res.send('Department Not Exist Or Was Deleted');
		}
	} catch (error) {
		res.json(error);
	}
};

module.exports = {
	getAllDepartment,
	getDepartmentByID,
	createDepartment,
	updateDepartment,
	deleteDepartment,
};
