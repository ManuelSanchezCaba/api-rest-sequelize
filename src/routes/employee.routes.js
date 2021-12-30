const express = require('express');
const router = express.Router();

const { verifyToken, isAdmin, isUser } = require('../middlewares/auth.middleware');

const {
	createEmployee,
	getAllEmployees,
	getEmployeeByID,
	updateEmployee,
	deleteEmployee,
} = require('../controllers/employee.controller');

router.get('/', [verifyToken, isUser], getAllEmployees);

router.get('/:id', [verifyToken, isUser], getEmployeeByID);

router.post('/', [verifyToken, isAdmin], createEmployee);

router.put('/:id', [verifyToken, isAdmin], updateEmployee);

router.delete('/:id', [verifyToken, isAdmin], deleteEmployee);

module.exports = router;
