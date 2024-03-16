const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const comunitySchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
		inmutable: true,
	},
	Comunity_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Comunity",
		default: "Anonimo",
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
		default: "/images/logo.webp",
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
