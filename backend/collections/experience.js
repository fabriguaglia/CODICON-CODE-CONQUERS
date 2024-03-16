const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

/**
 * Experience
 * @typedef Experience
 * @property {string} user_id
 * @property {string} comunity_id
 * @property {string} comment_id
 * @property {string} name
 * @property {string} description
 * @property {string} image_url
 * @property {string} audio
 * @property {number} limit
 * @property {string} date_create
 * @property {string} date_update
 */
const experienceSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		default: "Anonimo",
	},
	comunity_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Comunity",
		required: true,
	},
	comment_id: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment",
		},
	],
	reacions: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Reaction",
		},
	],
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	image_url: {
		type: String,
	},
	audio: {
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

experienceSchema.plugin(paginate);

const Experience = mongoose.model("Experience", experienceSchema);

module.exports = Experience;
