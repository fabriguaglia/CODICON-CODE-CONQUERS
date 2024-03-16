const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//const authenticate = require("./middleware/authenticate");

require("dotenv").config();

const app = express();

const corsOptions = {
	origin: "*",
	optionsSuccessStatus: 200,
	credentials: true,
	allowedHeaders: ["Content-Type", "Authorization"],
	methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));

mongoose
	.connect(process.env.DATABASE_URL)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.log(err);
	});

app.use(express.static("/public"));
app.use(express.json());
app.use("/auth", require("./middleware/login"));
app.use("/user", require("./routes/user"));
//app.use(authenticate);
app.use("/comunity", require("./routes/comunity"));
app.use("/experience", require("./routes/experience"));
app.use("/comment", require("./routes/comment"));
app.use("/message", require("./routes/message"));
app.use("/event", require("./routes/event"));
app.use("/invitation", require("./routes/invitation"));
app.use("/reaction", require("./routes/reaction"));

app.listen(3002, () => {
	console.log("Server is running on port 3002");
});
