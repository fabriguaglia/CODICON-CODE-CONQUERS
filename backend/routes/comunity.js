const Community = require("../collections/comunity");
const express = require("express");
const routerComunity = express.Router();
const upload = require("../middleware/upload");

/**
 * Get all comunities
 * @route GET /comunity
 * */

routerComunity.get("/", async (req, res) => {
	try {
		const options = {
			page: parseInt(req.query.page) || 1,
			limit: parseInt(req.query.limit) || 10,
			sort: { name: 1 },
		};
		const filter = {};

		if (req.query.user_id) {
			filter.user_id = new RegExp(req.query.user_id, "i");
		}

		if (req.query.name) {
			filter.name = new RegExp(req.query.name, "i");
		}

		const comunities = await Community.paginate(filter, options);

		res.status(200).json(comunities);
	} catch (error) {
		res.status(500).json(error);
	}
});

/**
 * Create a new comunity
 * @route POST /comunity
 * */

routerComunity.post("/", upload.single("comunity_image"), async (req, res) => {
	try {
		const comunity = new Community({
			user_id: req.body.user_id,
			name: req.body.name,
			comunity_image: req.file.filename,
			description: req.body.description,
			limit: req.body.limit,
			state: req.body.state,
		});
		await comunity.save();
		res.status(201).json(comunity);
	} catch (error) {
		res.status(500).json(error);
	}
});

/**
 * Update a comunity
 * @route PATCH /comunity/:id
 * */

routerComunity.patch(
	"/:id",
	upload.single("comunity_image"),
	async (req, res) => {
		try {
			const comunity = await Community.findByIdAndUpdate(
				req.params.id,
				{
					user_id: req.body.user_id,
					name: req.body.name,
					comunity_image: req.file.filename,
					description: req.body.description,
					limit: req.body.limit,
				},
				{
					new: true,
				}
			);
			res.status(200).json(comunity);
		} catch (error) {
			res.status(500).json(error);
		}
	}
);

/**
 * Delete a comunity
 * @route DELETE /comunity/:id
 * */

routerComunity.delete("/:id", async (req, res) => {
	try {
		const comunity = await Community.findByIdAndDelete(req.params.id);
		res.status(200).json(comunity);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = routerComunity;
