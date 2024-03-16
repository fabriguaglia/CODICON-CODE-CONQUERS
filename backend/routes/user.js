const User = require("../collections/user");
const express = require("express");
const routerUser = express.Router();

routerUser.get("/", async (req, res) => {
	try {
		const options = {
			page: parseInt(req.query.page) || 1,
			limit: parseInt(req.query.limit) || 10,
			sort: { name: 1 },
			populate: "comunity_id",
		};
		const filter = {};

		if (req.query.email) {
			filter.email = new RegExp(req.query.email, "i");
		}

		if (req.query.name) {
			filter.name = new RegExp(req.query.name, "i");
		}

		const users = await User.paginate(filter, options);

		res.status(200).json(users);
	} catch (error) {
		res.status(500).json(error);
	}
});

routerUser.post("/", async (req, res) => {
	try {
		const user = new User(req.body);
		await user.save();
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
});

routerUser.patch("/:id", async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
});

routerUser.delete("/:id", async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = routerUser;