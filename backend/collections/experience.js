const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

/**
 * Experience
 * @typedef Experience
 * @property {string} user_id
 * @property {string} comunity_id
 * @property {Array} comment_id
 * @property {Array} reacions
 * @property {Array} hashtags
 * @property {string} name
 * @property {string} description
 * @property {string} experience_image
 * @property {string} audio
 * @property {number} limit
 * @property {boolean} anonimo
 * @property {string} date_create
 * @property {string} date_update
 */
const experienceSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	comunity_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Comunity",
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
	hashtags: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Hashtag",
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
	experience_image: {
		type: String,
	},
	audio: {
		type: String,
	},
	limit: {
		type: Number,
		required: true,
	},
	anonimo: {
		type: Boolean,
		default: false,
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
