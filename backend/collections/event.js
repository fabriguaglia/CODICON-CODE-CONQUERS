const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

/**
 * Event
 * @typedef Event
 * @property {string} name
 * @property {string} description
 * @property {string} image_url
 * @property {string} audio
 * @property {number} limit
 * @property {string} date_start
 * @property {string} date_end
 * @property {boolean} stream
 * @property {string} country
 * @property {string} city
 * @property {string} address
 * @property {string} phone
 * @property {User} user_id
 * @property {Comunity} comunity_id
 * @property {string} date_create
 * @property {string} date_update
 */

const eventSchema = new mongoose.Schema({
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
	date_start: {
		type: Date,
		required: true,
	},
	date_end: {
		type: Date,
		required: true,
	},
	stream: {
		type: Boolean,
		default: false,
	},
	country: {
		type: String,
	},
	city: {
		type: String,
	},
	address: {
		type: String,
	},
	phone: {
		type: String,
	},
	user_id: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	],
	comunity_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Comunity",
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

eventSchema.plugin(paginate);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
