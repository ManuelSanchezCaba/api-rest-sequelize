const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const { notFoundEndpoint } = require('./middlewares/error.middleware');
const { createRoles } = require('./libs/initialSetup');

const app = express();

//initial setups
createRoles();

app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/department', require('./routes/department.routes'));
app.use('/career', require('./routes/career.routes'));
app.use('/employee', require('./routes/employee.routes'));
app.use(require('./routes/auth.routes'));
app.use(notFoundEndpoint);

module.exports = app;
