const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const invitationSchema = new mongoose.Schema({
	user_id: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			default: "Anonimo",
		},
	],
	event_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Event",
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

invitationSchema.plugin(paginate);

const Invitation = mongoose.model("Invitation", invitationSchema);

module.exports = Invitation;
