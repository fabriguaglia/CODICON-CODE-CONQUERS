const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const experienceSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		default: "Anonimo",
	},
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
