const AppError = require('../utils/app_error');
const config = require('../config');

/**
 * @description `handle cast error`
 * @param {object} [err]
 * @returns `(ErrorMessage, ErrorCode)`
 */
const handleCastErrorDB = (err) => {
	const message = `Invalid ${err.path}: ${err.value}.`;
	return new AppError(message, 400);
};

/**
 * @description handle duplicate entry into database
 * @param {object} [err]
 * @returns `(ErrorMessage, ErrorCode)`
 */
const handleDuplicateFieldsDB = (err) => {
	const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
	const message = `Duplicate field value: ${value}. Please use another value!`;
	return new AppError(message, 400);
};

/**
 * @description handle validation error
 * @param {object} [err]
 * @returns `(ErrorMessage, ErrorCode)`
 */
const handleValidationErrorDB = (err) => {
	const errors = Object.values(err.errors).map((el) => el.message);
	const message = `Invalid input data. ${errors.join(' . ')}`;
	return new AppError(message, 400);
};

/**
 * @description handle invalid token errors
 * @returns `(ErrorMessage, ErrorCode)`
 */
const handleJWTError = () => new AppError('Invalid token. Please log in again', 401);

/**
 * @description handle expired token errors
 * @returns `(ErrorMessage, ErrorCode)`
 */
const handleJWTExpiredError = () => new AppError('Your token has expired! Please log in again.', 401);

/**
 *
 * @description `Return Error in development environment`
 * @param {*} err
 * @param {*} req
 * @param {*} res
 */
const sendErrorDev = (err, req, res) => {
	if (req.originalUrl.startsWith('/api')) {
		res.status(err.statusCode).json({
			status: err.status,
			error: err,
			errorMessage: err.message,
			stack: err.stack,
		});
	}
};

/**
 *
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @returns
 */
const sendErrorProd = (err, req, res) => {
	if (req.originalUrl.startsWith('/api')) {
		// Operational, trusted error: send message to client
		if (err.isOperational) {
			return res.status(err.statusCode).json({
				status: err.status,
				errorMessage: err.message,
			});
		}

		// Programming or other unknown error: don't leak error details
		console.error('Error', err);

		// Send generic message
		return res.status(500).json({
			status: 'error',
			errorMessage: 'Something went wrong!',
		});
	}
};

module.exports = (err, req, res, next) => {
	err.statusCode = err.statusCode || 400;

	err.status = err.status || 'error';

	if (config.NODE_ENV === 'development') {
		sendErrorDev(err, req, res);
	} else if (config.NODE_ENV === 'production') {
		let error = { ...err };

		error.message = err.message;

		if (error.name === 'CastError') error = handleCastErrorDB(error);
		if (err.code === 11000) error = handleDuplicateFieldsDB(error);
		if (error.name === 'ValidationError') error = handleValidationErrorDB(error);
		if (error.name === 'JsonWebTokenError') error = handleJWTError();
		if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();

		sendErrorProd(error, req, res);
	}
};
