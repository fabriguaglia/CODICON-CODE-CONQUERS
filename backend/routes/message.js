const Message = require("../collections/message");
const express = require("express");
const routerMessage = express.Router();

/**
 * Get all messages
 * @route GET /message
 */

routerMessage.get("/", async (req, res) => {
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

		const messages = await Message.paginate(filter, options);

		res.status(200).json(messages);
	} catch (error) {
		res.status(500).json(error);
	}
});

/**
 * Create a new message
 * @route POST /message
 */

routerMessage.post("/", async (req, res) => {
	try {
		const message = new Message(req.body);
		await message.save();
		res.status(201).json(message);
	} catch (error) {
		res.status(500).json(error);
	}
});

/**
 * Update a message
 * @route PATCH /message/:id
 */

routerMessage.patch("/:id", async (req, res) => {
	try {
		const message = await Message.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(200).json(message);
	} catch (error) {
		res.status(500).json(error);
	}
});

/**
 * Delete a message
 * @route DELETE /message/:id
 */

routerMessage.delete("/:id", async (req, res) => {
	try {
		const message = await Message.findByIdAndDelete(req.params.id);
		res.status(200).json(message);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = routerMessage;
