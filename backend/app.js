const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const config = require('./config');

const app = express();

app.enable('trust proxy');
app.options('*', cors());

// Set security HTTP headers
app.use(helmet());

if (config.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

if (config.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
} else {
	app.get('/', (req, res) => {
		res.send('API is running... ');
	});
}

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	next();
});

// app.use(globalErrorHandler);

// START SERVER
module.exports = app;
