const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

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
	image_url: {
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
