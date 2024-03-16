const Comment = require("../collections/comment");
const express = require("express");
const routerComment = express.Router();

/**
 * Get all comments
 * @route GET /comment
 */

routerComment.get("/", async (req, res) => {
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

		const comments = await Comment.paginate(filter, options);

		res.status(200).json(comments);
	} catch (error) {
		res.status(500).json(error);
	}
});

/**
 * Create a new comment
 * @route POST /comment
 * */

routerComment.post("/", async (req, res) => {
	try {
		const comment = new Comment(req.body);
		await comment.save();
		res.status(201).json(comment);
	} catch (error) {
		res.status(500).json(error);
	}
});

/**
 * Update a comment
 * @route PATCH /comment/:id
 * */

routerComment.patch("/:id", async (req, res) => {
	try {
		const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(200).json(comment);
	} catch (error) {
		res.status(500).json(error);
	}
});

/**
 * Delete a comment
 * @route DELETE /comment/:id
 * */

routerComment.delete("/:id", async (req, res) => {
	try {
		const comment = await Comment.findByIdAndDelete(req.params.id);
		res.status(200).json(comment);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = routerComment;
