const Invitation = require("../collections/invitation");
const express = require("express");
const routerInvitation = express.Router();

routerInvitation.get("/", async (req, res) => {
	try {
		const options = {
			page: parseInt(req.query.page) || 1,
			limit: parseInt(req.query.limit) || 10,
			sort: { name: 1 },
		};
		const filter = {};

		if (req.query.name) {
			filter.name = new RegExp(req.query.name, "i");
		}

		const invitations = await Invitation.paginate(filter, options);

		res.status(200).json(invitations);
	} catch (error) {
		res.status(500).json(error);
	}
});

routerInvitation.post("/", async (req, res) => {
	try {
		const invitation = new Invitation(req.body);
		await invitation.save();
		res.status(201).json(invitation);
	} catch (error) {
		res.status(500).json(error);
	}
});

routerInvitation.patch("/:id", async (req, res) => {
	try {
		const invitation = await Invitation.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
			}
		);
		res.status(200).json(invitation);
	} catch (error) {
		res.status(500).json(error);
	}
});

routerInvitation.delete("/:id", async (req, res) => {
	try {
		const invitation = await Invitation.findByIdAndDelete(req.params.id);
		res.status(200).json(invitation);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = routerInvitation;
