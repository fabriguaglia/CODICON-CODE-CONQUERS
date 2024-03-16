const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
	destination: "public/images",
	filename: (req, file, cb) => {
		cb(
			null,
			file.fieldname + "-" + Date.now() + path.extname(file.originalname)
		);
	},
});

const fileFilter = (req, file, cb) => {
	if (
		file.mimetype === "images/jpeg" ||
		file.mimetype === "images/png" ||
		file.mimetype === "images/jpg" ||
		file.mimetype === "images/webp"
	) {
		cb(null, true);
	} else {
		const error = new Error("El archivo no es una imagen valida");
		error.status = 400;
		cb(error);
	}
};

const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 5,
	},
	fileFilter: fileFilter,
});

module.exports = upload;
