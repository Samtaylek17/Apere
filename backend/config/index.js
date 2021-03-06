const config = {
	NODE_ENV: process.env.NODE_ENV,
	PORT: process.env.PORT,
	MONGO_URI: process.env.MONGO_URI,
	MONGO_URI_PROD: process.env.MONGO_URI_PROD,
	CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
	CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};

module.exports = config;
