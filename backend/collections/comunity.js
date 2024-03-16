const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const comunitySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	description: {
		type: String,
		required: true,
	},
	image_url: {
		type: String,
	},
	limit: {
		type: Number,
		required: true,
	},
	date_create: {
		type: Date,
		default: Date.now,
		inmutable: true,
	},
	date_update: {
		type: Date,
		default: Date.now,
	},
});

comunitySchema.plugin(paginate);

const Comunity = mongoose.model("Comunity", comunitySchema);

module.exports = Comunity;
