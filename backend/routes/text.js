const express = require("express");
const say = require("say");
const fs = require("fs");
const path = require("path");
const Experience = require("../collections/experience");
const Comment = require("../collections/comment");

const routerText = express.Router();

routerText.get("/generate-audio/", async (req, res) => {
	const id = req.query.id;
	const type = req.query.type;

	try {
		let entity, textToSpeech;

		// Determinar el texto a partir del tipo de entidad y obtener la entidad
		if (type === "experience") {
			entity = await Experience.findById(id);
			if (!entity) {
				return res.status(404).json({ message: "Experiencia no encontrada" });
			}
			textToSpeech = entity.description;
		} else if (type === "comment") {
			entity = await Comment.findById(id);
			if (!entity) {
				return res.status(404).json({ message: "Comentario no encontrado" });
			}
			textToSpeech = entity.message;
		} else {
			return res.status(400).json({ message: "Tipo de entidad no válida" });
		}

		// Verificar que se ha proporcionado texto
		if (!textToSpeech) {
			return res
				.status(400)
				.json({ message: "No hay texto para convertir en audio" });
		}

		// Ruta y nombre del archivo
		const fileName = `audio-${Date.now()}.wav`;
		const filePath = path.join(__dirname, "..", "public", "audio", fileName);

		// Generar el audio y guardarlo en un archivo
		say.export(textToSpeech, null, 1.0, filePath, async (err) => {
			if (err) {
				console.error(err);
				return res.status(500).json({ message: "Error al generar el audio" });
			}

			// Actualizar la entidad con el nombre del archivo de audio
			const updateData = { audio: fileName };
			const updatedEntity =
				type === "experience"
					? await Experience.findByIdAndUpdate(id, updateData, { new: true })
					: await Comment.findByIdAndUpdate(id, updateData, { new: true });

			// Devolver información relevante, incluido el nombre del archivo de audio
			res.json({
				message: "Audio generado y guardado con éxito",
				fileName,
				entity: updatedEntity,
			});
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error interno del servidor" });
	}
});

module.exports = routerText;
