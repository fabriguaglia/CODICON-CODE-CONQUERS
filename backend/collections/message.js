const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

/**
 * Message
 * @typedef Message
 * @property {string} message
 * @property {string} audio
 * @property {string} date_create
 * @property {string} date_update
 * @property {User} user_id
 * @property {Reaction[]} reactions
 */

const messageSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	audio: {
		type: String,
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

messageSchema.plugin(paginate);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
