const express = require('express');
const router = express.Router();

const { verifyToken, isAdmin, isUser } = require('../middlewares/auth.middleware');

const {
	getAllCareer,
	getCareerByID,
	createCareer,
	updateCareer,
	deleteCareer,
} = require('../controllers/career.controllers');

router.get('/', [verifyToken, isUser], getAllCareer);

router.get('/:id', [verifyToken, isUser], getCareerByID);

router.post('/', [verifyToken, isAdmin], createCareer);

router.put('/:id', [verifyToken, isAdmin], updateCareer);

router.delete('/:id', [verifyToken, isAdmin], deleteCareer);

module.exports = router;
