const cloudinary = require('cloudinary').v2;
const BuyRequest = require('../models/buy_request');
const SellRequest = require('../models/sell_request');
const catchAsync = require('../utils/catch_async');
const { imageUploader } = require('../utils/image_uploader');
const config = require('../config');

cloudinary.config({
	cloud_name: config.CLOUDINARY_CLOUD_NAME,
	api_key: config.CLOUDINARY_API_KEY,
	api_secret: config.CLOUDINARY_API_SECRET,
});

const uploadDeviceImage = imageUploader.single('image');

const addDevice = catchAsync(async (req, res, next) => {
	const { name, grade, storageSize, price } = req.body;

	if (req.file) {
		const result = await cloudinary.uploader.upload(req.file.path, {resource_type: 'image'})

    req.body.image = result.secure_url;
    const device = await BuyRequest.create(req.body);
    res.status(201).json({
      status: 'success',
      device
    })
	}
});

const
