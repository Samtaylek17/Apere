const mongoose = require('mongoose');
const config = require('./config/index');

process.on('uncaughtException', (err) => {
	console.log('UNCAUGHT EXCEPTION! Shutting down...');
	console.log(err, err.name, err.message);
	process.exit(1);
});

const app = require('./app');
// Use production DB if environment is in production
if (config.NOD_ENV === 'production') {
	const DB = config.MONGO_URI_PROD.replace('<password>', config.MONGO_PASS);

	mongoose
		.connect(DB, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		})
		.then(() => console.log('DB connection successful'));
} else {
	mongoose
		.connect(config.MONGO_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		})
		.then(() => console.log('DB connection successful'));
}

const port = config.PORT || 4003;

const server = app.listen(port, () => {
	console.log(`App running on port ${port}`);
});

process.on('unhandledRejection', (err) => {
	console.log(err.name, err.message);
	console.log('UNHANDLED REJECTION! Shutting down...');
	server.close(() => {
		process.exit(1);
	});
});

process.on('SIGTERM', () => {
	console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
	server.close(() => {
		console.log('🔥 Process terminated!');
	});
});
