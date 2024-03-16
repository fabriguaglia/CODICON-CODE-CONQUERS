const Community = require("../collections/comunity");
const express = require("express");
const routerComunity = express.Router();

routerComunity.get("/", async (req, res) => {
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

		const comunities = await Community.paginate(filter, options);

		res.status(200).json(comunities);
	} catch (error) {
		res.status(500).json(error);
	}
});

routerComunity.post("/", async (req, res) => {
	try {
		const comunity = new Community(req.body);
		await comunity.save();
		res.status(201).json(comunity);
	} catch (error) {
		res.status(500).json(error);
	}
});

routerComunity.patch("/:id", async (req, res) => {
	try {
		const comunity = await Community.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
			}
		);
		res.status(200).json(comunity);
	} catch (error) {
		res.status(500).json(error);
	}
});

routerComunity.delete("/:id", async (req, res) => {
	try {
		const comunity = await Community.findByIdAndDelete(req.params.id);
		res.status(200).json(comunity);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = routerComunity;
