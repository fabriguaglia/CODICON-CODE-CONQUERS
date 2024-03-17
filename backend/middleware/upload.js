const multer = require("multer");
const path = require("path");

/**
 * Set the storage location
 * */

const storage = multer.diskStorage({
	destination: "public/images",
	filename: (req, file, cb) => {
		cb(
			null,
			file.fieldname + "-" + Date.now() + path.extname(file.originalname)
		);
	},
});

/**
 * Check if the file is an image
 */

const fileFilter = (req, file, cb) => {
	if (
		file.mimetype === "image/jpeg" ||
		file.mimetype === "image/png" ||
		file.mimetype === "image/jpg" ||
		file.mimetype === "image/webp" ||
		file.mimetype === "image/gif"
	) {
		cb(null, true);
	} else {
		const error = new Error("El archivo no es una imagen valida");
		error.status = 400;
		cb(error);
	}
};

/**
 * Upload a file to the server
 * @route POST /upload
 * */

const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 20,
	},
	fileFilter: fileFilter,
});

module.exports = upload;
