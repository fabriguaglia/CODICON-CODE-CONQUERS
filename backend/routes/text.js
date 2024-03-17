const express = require("express");
const say = require("say");
const fs = require("fs");
const path = require("path");
const Experience = require("../collections/experience");
const Comment = require("../collections/comment");

const routerText = express.Router();

routerText.get("/generate-audio/:id", async (req, res) => {
	const { id } = req.params; // ID de la entidad

	try {
		// Determinar el texto a partir del tipo de entidad
		let textToSpeech = "Texto por defecto";
		let updatePromise;

		if (req.query.type === "experience") {
			const experience = await Experience.findById(id);
			if (!experience) {
				return res.status(404).json({ message: "Experiencia no encontrada" });
			}
			textToSpeech = experience.description || textToSpeech;
			updatePromise = Experience.findByIdAndUpdate(
				id,
				{ $set: { audio: "" } },
				{ new: true }
			);
		} else if (req.query.type === "comment") {
			const comment = await Comment.findById(id);
			if (!comment) {
				return res.status(404).json({ message: "Comentario no encontrado" });
			}
			textToSpeech = comment.message || textToSpeech;
			updatePromise = Comment.findByIdAndUpdate(
				id,
				{ $set: { audio: "" } },
				{ new: true }
			);
		} else {
			return res.status(400).json({ message: "Tipo de entidad no válida" });
		}

		const fileName = `audio-${Date.now()}.wav`;
		const filePath = path.join(__dirname, "..", "public", "audio", fileName);

		// Generar el audio y guardarlo en un archivo
		say.export(textToSpeech, null, 1.0, filePath, async (err) => {
			if (err) {
				console.error(err);
				return res.status(500).json({ message: "Error al generar el audio" });
			}

			// Actualizar la entidad con el nombre del archivo de audio
			const updatedEntity = await updatePromise.set({ audio: fileName }).save();

			// Devolver información relevante, incluido el nombre del archivo de audio
			res.json({
				message: "Audio generado y guardado con éxito",
				fileName,
				updatedEntity,
			});
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error interno del servidor" });
	}
});

module.exports = routerText;
