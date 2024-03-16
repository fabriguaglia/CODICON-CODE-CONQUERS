const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

/**
 * Support
 * @property {string} name
 * @property {string} email
 * @property {string} message
 * @property {string} date_create
 * @property {string} date_update
 */

const supportSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	date_create: {
		type: Date,
		default: Date.now,
	},
	date_update: {
		type: Date,
		default: Date.now,
	},
});

supportSchema.plugin(paginate);

const Support = mongoose.model("Support", supportSchema);

module.exports = Support;
