const Event = require("../collections/event");
const express = require("express");
const routerEvent = express.Router();

/**
 * Get all events
 * @route GET /event
 */

routerEvent.get("/", async (req, res) => {
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

		const events = await Event.paginate(filter, options);

		res.status(200).json(events);
	} catch (error) {
		res.status(500).json(error);
	}
});

/**
 * Create a new event
 * @route POST /event
 */

routerEvent.post("/", async (req, res) => {
	try {
		const event = new Event(req.body);
		await event.save();
		res.status(201).json(event);
	} catch (error) {
		res.status(500).json(error);
	}
});

/**
 * Update a event
 * @route PATCH /event/:id
 * */

routerEvent.patch("/:id", async (req, res) => {
	try {
		const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(200).json(event);
	} catch (error) {
		res.status(500).json(error);
	}
});

/**
 * Delete a event
 * @route DELETE /event/:id
 * */

routerEvent.delete("/:id", async (req, res) => {
	try {
		const event = await Event.findByIdAndDelete(req.params.id);
		res.status(200).json(event);
	} catch (error) {
		res.status(500).json(error);
	}
});
module.exports = routerEvent;
