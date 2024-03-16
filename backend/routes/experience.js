const Experience = require("../collections/experience");
const express = require("express");
const routerExperience = express.Router();

routerExperience.get("/", async (req, res) => {
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

		const experiences = await Experience.paginate(filter, options);

		res.status(200).json(experiences);
	} catch (error) {
		res.status(500).json(error);
	}
});

routerExperience.post("/", async (req, res) => {
	try {
		const experience = new Experience(req.body);
		await experience.save();
		res.status(201).json(experience);
	} catch (error) {
		res.status(500).json(error);
	}
});

routerExperience.patch("/:id", async (req, res) => {
	try {
		const experience = await Experience.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
			}
		);
		res.status(200).json(experience);
	} catch (error) {
		res.status(500).json(error);
	}
});

routerExperience.delete("/:id", async (req, res) => {
	try {
		const experience = await Experience.findByIdAndDelete(req.params.id);
		res.status(200).json(experience);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = routerExperience;
