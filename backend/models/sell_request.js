const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const SellRequestSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},

		storageSize: {
			type: String,
			required: true,
			trim: true,
		},

		grade: {
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

const SellRequest = mongoose.model('SellRequest', SellRequestSchema);

module.exports = SellRequest;
