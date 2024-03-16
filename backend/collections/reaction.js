const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

/**
 * Reaction
 * @typedef Reaction
 * @property {string} reaction
 * @property {string} date_create
 * @property {string} date_update
 */

const reactionSchema = new mongoose.Schema({
	reaction: {
		type: String,
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

reactionSchema.plugin(paginate);

const Reaction = mongoose.model("Reaction", reactionSchema);

module.exports = Reaction;
