const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

/**
 * Comunity
 * @typedef Comunity
 * @property {string} user_id
 * @property {string} name
 * @property {string} description
 * @property {string} comunity_image
 * @property {number} limit
 * @property {boolean} state
 * @property {Reaction[]} reactions
 * @property {string} date_create
 * @property {string} date_update
 */

const comunitySchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	name: {
		type: String,
		required: true,
		unique: true,
	},
	description: {
		type: String,
		required: true,
	},
	comunity_image: {
		type: String,
	},
	limit: {
		type: Number,
		required: true,
	},
	state: {
		type: Boolean,
		default: false,
	},
	reactions: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Reaction",
		},
	],
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
