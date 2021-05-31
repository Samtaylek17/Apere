const mongoose = require('mongoose');

const BuyRequestSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},

		grade: {
			type: String,
			required: true,
			trim: true,
		},
		storageSize: {
			type: String,
			required: true,
			trim: true,
		},

		slug: {
			type: String,
			slug: ['name', 'grade', 'storageSize'],
			unique: true,
		},
		price: {
			type: Number,
			required: true,
			trim: true,
		},
		image: {
			type: String,
			required: true,
		},
	},
	{
		timeStamps: true,
		toObject: { virtuals: true },
		toJSON: { virtuals: true },
	}
);

const BuyRequest = mongoose.model('BuyRequest', BuyRequestSchema);

module.exports = BuyRequest;
