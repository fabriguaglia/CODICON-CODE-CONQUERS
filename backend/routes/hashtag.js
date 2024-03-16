const Hashtag = require("../collections/hashtag");
const express = require("express");
const routerHashtag = express.Router();

/**
 * Get all hashtags
 * @route GET /hashtag
 * @group Hashtag - Operations about hashtag
 * @returns {object} 200 - An array of hashtags
 */
routerHashtag.get("/", async (req, res) => {
	try {
		const filter = {};
		const options = {
			page: parseInt(req.query.page) || 1,
			limit: parseInt(req.query.limit) || 10,
			sort: { name: 1 },
		};

		if (req.query.name) {
			filter.name = new RegExp(req.query.name, "i");
		}

		if (!filter.name) {
			res.status(404).json("Hashtag not found");
		}

		const hashtags = await Hashtag.paginate(filter, options);

		res.status(200).json(hashtags);
	} catch (error) {
		res.status(500).json(error);
	}
});

/**
 * Create a new hashtag
 * @route POST /hashtag
 * @group Hashtag - Operations about hashtag
 * @returns {object} 201 - The hashtag
 */

routerHashtag.post("/", async (req, res) => {
	try {
		const hashtag = new Hashtag(req.body);
		await hashtag.save();
		res.status(201).json(hashtag);
	} catch (error) {
		res.status(500).json(error);
	}
});

/**
 * Update a hashtag
 * @route PATCH /hashtag/:id
 * @group Hashtag - Operations about hashtag
 * @returns {object} 200 - The hashtag
 */

routerHashtag.patch("/:id", async (req, res) => {
	try {
		const hashtag = await Hashtag.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(200).json(hashtag);
	} catch (error) {
		res.status(500).json(error);
	}
});

/**
 * Delete a hashtag
 * @route DELETE /hashtag/:id
 * @group Hashtag - Operations about hashtag
 * @returns {object} 200 - The hashtag
 */

routerHashtag.delete("/:id", async (req, res) => {
	try {
		const hashtag = await Hashtag.findByIdAndDelete(req.params.id);
		res.status(200).json(hashtag);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = routerHashtag;
