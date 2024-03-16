const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const jwt = require("jsonwebtoken");
const User = require("../collections/user");
require("dotenv").config();

const routerAuth = require("express").Router();

// charge private key from environment variable
// charge algorithm from environment variable
const privateKey = process.env.JWT_PRIVATE_KEY;
const algorithm = process.env.JWT_ALGORITHM || "RS256";

// configure passport with local strategy
passport.use(
	new LocalStrategy(
		{
			usernameField: "email",
			passwordField: "password",
		},
		// function to validate username and password
		async (email, password, done) => {
			try {
				// verify if user exists
				const user = await User.findOne({ email });

				if (!user || !user.checkPassword(password)) {
					// if user doesn't exist or password is incorrect
					return done(null, false, { message: "Invalid email or password" });
				}
				// if user exists and password is correct return user
				return done(null, user);
			} catch (error) {
				return done(error);
			}
		}
	)
);

// serializer user id
passport.serializeUser((user, done) => {
	done(null, user._id);
});

// deserializer user
passport.deserializeUser(async (id, done) => {
	try {
		const user = await User.findById(id);
		done(null, user);
	} catch (error) {
		done(error);
	}
});

// login
routerAuth.post("/login", async (req, res, next) => {
	passport.authenticate("local", async (err, user, info) => {
		if (err) {
			return res.status(500).json({
				message: "Internal Server Error",
			});
		}

		if (!user) {
			return res.status(401).json({
				message: "Unauthorized",
			});
		}

		try {
			const user = await User.findOne({ email: req.body.email });

			// create data for token
			const tokenData = {
				customer_id: user._id,
				username: user.username,
				email: user.email,
			};

			const user_id = user._id;

			// create token with data and sign with private key and algorithm
			const token = jwt.sign(tokenData, privateKey, { algorithm });

			// return token
			return res.status(200).json({
				message: "Login Successful",
				token,
				user_id,
			});
		} catch (error) {
			console.error("Error during login:", error);
			return res.status(500).json({
				message: "Internal Server Error",
			});
		}
	})(req, res, next);
});

// logout and destroy session
routerAuth.post("/logout", (req, res) => {
	try {
		// destroy session
		req.session.destroy();
		return res.status(200).json({
			message: "Logout Successful",
		});
	} catch (error) {
		return res.status(500).json({
			message: "Internal Server Error",
		});
	}
});

module.exports = routerAuth;
