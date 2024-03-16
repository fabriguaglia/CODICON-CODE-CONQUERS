const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const messageSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		default: "Anonimo",
	},
	message: {
		type: String,
		required: true,
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

messageSchema.plugin(paginate);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
