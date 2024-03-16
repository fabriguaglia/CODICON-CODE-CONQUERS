const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

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
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	comunity_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Comunity",
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

eventSchema.plugin(paginate);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
