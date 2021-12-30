const careerModel = require('../models/Career');

const getAllCareer = async (req, res) => {
	try {
		const careers = await careerModel.findAll();
		res.json(careers);
	} catch (error) {
		res.json(error);
	}
};

const getCareerByID = async (req, res) => {
	try {
		const { id } = req.params;
		const career = await careerModel.findByPk(id);
		res.json(career);
	} catch (error) {
		res.json(error);
	}
};

const createCareer = async (req, res) => {
	try {
		const { descr } = req.body;
		await careerModel.create({ descr });
		res.send('Career Created');
	} catch (error) {
		res.json(error);
	}
};

const updateCareer = async (req, res) => {
	try {
		const { id } = req.params;
		const { descr } = req.body;
		await careerModel.update(
			{ descr },
			{
				where: {
					id,
				},
			}
		);
		res.send('Career Updated');
	} catch (error) {
		res.json(error);
	}
};

const deleteCareer = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await careerModel.destroy({
			where: {
				id,
			},
		});

		if (result === 1) {
			res.send('Career Deleted');
		} else {
			res.send('Career Not Exist Or Was Deleted');
		}
	} catch (error) {
		res.json(error);
	}
};

module.exports = {
	getAllCareer,
	getCareerByID,
	createCareer,
	updateCareer,
	deleteCareer,
};
