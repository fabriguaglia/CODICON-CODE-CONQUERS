const Reaction = require("../collections/reaction");
const express = require("express");
const routerReaction = express.Router();

/**
 * Get all reactions
 * @route GET /reaction
 */

routerReaction.get("/", async (req, res) => {
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

		const reactions = await Reaction.paginate(filter, options);

		res.status(200).json(reactions);
	} catch (error) {
		res.status(500).json(error);
	}
});

/**
 * Create a new reaction
 * @route POST /reaction
 */

routerReaction.post("/", async (req, res) => {
	try {
		const reaction = new Reaction(req.body);
		await reaction.save();
		res.status(201).json(reaction);
	} catch (error) {
		res.status(500).json(error);
	}
});

/**
 * Update a reaction
 * @route PATCH /reaction/:id
 */

routerReaction.patch("/:id", async (req, res) => {
	try {
		const reaction = await Reaction.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(200).json(reaction);
	} catch (error) {
		res.status(500).json(error);
	}
});

/**
 * Delete a reaction
 * @route DELETE /reaction/:id
 */

routerReaction.delete("/:id", async (req, res) => {
	try {
		const reaction = await Reaction.findByIdAndDelete(req.params.id);
		res.status(200).json(reaction);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = routerReaction;
