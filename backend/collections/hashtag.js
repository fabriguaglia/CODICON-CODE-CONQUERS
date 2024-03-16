const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

/**
 * Hashtag
 * @property {string} name
 * @property {Date} date_create
 * @property {Date} date_update
 */
const hashtagSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
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

hashtagSchema.plugin(paginate);

const Hashtag = mongoose.model("Hashtag", hashtagSchema);

module.exports = Hashtag;
