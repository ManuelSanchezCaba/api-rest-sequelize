const supertest = require('supertest');
const app = require('../app');
const server = require('../index');
const db = require('../database');

const departmentModel = require('../models/Department');
const { createUserAdmin, getToken } = require('./Helpers/auth');

const api = supertest(app);

const initialDepartments = [
	{
		descr: 'Departamento 1',
	},
	{
		descr: 'Departamento 2',
	},
];

beforeEach(async () => {
	await createUserAdmin();

	await departmentModel.destroy({
		where: {},
	});

	for (let department of initialDepartments) {
		await departmentModel.create(department);
	}
});

describe('GET DEPARTMENT', () => {
	test('should return a json', async () => {
		const token = await getToken();

		await api
			.get('/department')
			.set('x-access-token', token)
			.expect(200)
			.expect('Content-Type', /application\/json/);
	});

	test('should return all departments', async () => {
		const token = await getToken();
		const response = await api.get('/department').set('x-access-token', token);
		expect(response.body).toHaveLength(initialDepartments.length);
	});
});

describe('POST DEPARTMENT', () => {
	const department = {
		descr: 'Departamento 3',
	};

	test('should return status 200', async () => {
		const token = await getToken();
		await api.post('/department').set('x-access-token', token).send(department).expect(200);
	});

	test('should return message Department Created', async () => {
		const token = await getToken();
		const response = await api.post('/department').set('x-access-token', token).send(department);
		expect(response.text).toContain('Department Created');
	});
});

describe('PUT DEPARTMENT', () => {
	test('should return status 200', async () => {
		const token = await getToken();
		const departments = await departmentModel.findAll({ where: {} });
		await api
			.put(`/department/${departments[0].id.toString().replace('undefined', '')}`)
			.set('x-access-token', token)
			.send({ descr: 'Tecnologia' })
			.expect(200);
	});

	test('should return message Department Updated', async () => {
		const token = await getToken();
		const departments = await departmentModel.findAll({ where: {} });
		const response = await api
			.put(`/department/${departments[0].id.toString().replace('undefined', '')}`)
			.set('x-access-token', token)
			.send({ descr: 'Tecnologia' });
		expect(response.text).toContain('Department Updated');
	});
});

describe('DELETE DEPARTMENT', () => {
	test('should return status 200', async () => {
		const token = await getToken();
		const departments = await departmentModel.findAll({ where: {} });
		await api
			.delete(`/department/${departments[0].id.toString().replace('undefined', '')}`)
			.set('x-access-token', token)
			.send({ descr: 'Tecnologia' })
			.expect(200);
	});

	test('should return message Department Updated', async () => {
		const token = await getToken();
		const departments = await departmentModel.findAll({ where: {} });
		const response = await api
			.delete(`/department/${departments[0].id.toString().replace('undefined', '')}`)
			.set('x-access-token', token)
			.send({ descr: 'Tecnologia' });
		expect(response.text).toContain('Department Deleted');
	});
});

afterAll(() => {
	db.close();
	server.close();
});
