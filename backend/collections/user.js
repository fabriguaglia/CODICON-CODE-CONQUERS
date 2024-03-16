const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  comunity_create: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Community",
  },
  communities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
    },
  ],
  date_create: {
    type: Date,
    default: Date.now,
    inmutable: true,
  },
  date_update: {
    type: Date,
    default: Date.now,
  },
});

userSchema.plugin(paginate);

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
