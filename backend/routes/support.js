const Support = require("../collections/support");
const express = require("express");
const routerSupport = express.Router();

routerSupport.get("/", async (req, res) => {
	try {
		const filter = {};
		const options = {
			page: parseInt(req.query.page) || 1,
			limit: parseInt(req.query.limit) || 10,
			sort: { email: 1 },
		};

		if (req.query.email) {
			filter.email = new RegExp(req.query.email, "i");
		}

		const support = await Support.paginate(filter, options);
		res.status(200).json(support);
	} catch (error) {
		res.status(500).json(error);
	}
});

routerSupport.post("/", async (req, res) => {
	try {
		const support = await Support.create(req.body);
		res.status(200).json(support);
	} catch (error) {
		res.status(500).json(error);
	}
});

routerSupport.patch("/:id", async (req, res) => {
	try {
		const support = await Support.findByIdAndUpdate(req.params.id, req.body);
		res.status(200).json(support);
	} catch (error) {
		res.status(500).json(error);
	}
});

routerSupport.delete("/:id", async (req, res) => {
	try {
		const support = await Support.findByIdAndDelete(req.params.id);
		res.status(200).json(support);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = routerSupport;
