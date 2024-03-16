const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const commentSchema = new mongoose.Schema({
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
	limit: {
		type: Number,
		required: true,
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

commentSchema.plugin(paginate);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
