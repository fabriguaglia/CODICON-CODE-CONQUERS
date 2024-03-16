const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
const passport = require("passport");
require("dotenv").config();

const public = process.env.JWT_PUBLIC_KEY;
const private = process.env.JWT_PRIVATE_KEY;
const algorithms = process.env.JWT_ALGORITHM || "RS256";

passport.use(
	new JwtStrategy(
		{
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: private,
		},
		async (payload, done) => {
			try {
				if (!payload) {
					return done(null, false, { message: "Invalid token" });
				}
				const user = payload.user;
				if (!user) {
					return done(null, false, { message: "Invalid customer" });
				}
				return done(null, user);
			} catch (error) {
				return done(error, false);
			}
		}
	)
);

const authenticate = async (req, res, next) => {
	const token = req.headers.authorization;

	if (!token) {
		return res.status(401).json({ message: "Unauthorized" });
	}

	jwt.verify(
		token.replace(/^Bearer\s/, ""),
		public,
		{ algorithms: algorithms },
		async (err, decoded) => {
			if (err) {
				console.log("Error verifying token", err.message);
				return res.status(401).json({ message: "Unauthorized" });
			}

			req.user = decoded;

			next();
		}
	);
};

module.exports = authenticate;
