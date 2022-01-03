const departmentModel = require('../models/Department');

const getAllDepartment = async (req, res) => {
	try {
		const departments = await departmentModel.findAll();
		res.status(200).json(departments);
	} catch (error) {
		res.status(500).json(error);
	}
};

const getDepartmentByID = async (req, res) => {
	try {
		const { id } = req.params;
		const department = await departmentModel.findByPk(id);
		res.status(200).json(department);
	} catch (error) {
		res.status(500).json(error);
	}
};

const createDepartment = async (req, res) => {
	try {
		const { descr } = req.body;
		await departmentModel.create({ descr });
		res.status(200).send('Department Created');
	} catch (error) {
		res.status(500).json(error);
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
			res.status(200).send('Department Updated');
		} else {
			res.status(400).send('Department Not Exist');
		}
	} catch (error) {
		res.status(500).json(error);
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
			res.status(200).send('Department Deleted');
		} else {
			res.status(400).send('Department Not Exist Or Was Deleted');
		}
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	getAllDepartment,
	getDepartmentByID,
	createDepartment,
	updateDepartment,
	deleteDepartment,
};
