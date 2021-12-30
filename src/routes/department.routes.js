const express = require('express');
const router = express.Router();

const { verifyToken, isAdmin, isUser } = require('../middlewares/auth.middleware');

const {
	getAllDepartment,
	getDepartmentByID,
	createDepartment,
	updateDepartment,
	deleteDepartment,
} = require('../controllers/department.controllers');

router.get('/', [verifyToken, isUser], getAllDepartment);

router.get('/:id', [verifyToken, isUser], getDepartmentByID);

router.post('/', [verifyToken, isAdmin], createDepartment);

router.put('/:id', [verifyToken, isAdmin], updateDepartment);

router.delete('/:id', [verifyToken, isAdmin], deleteDepartment);

module.exports = router;
