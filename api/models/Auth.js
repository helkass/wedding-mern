const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: false,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Auth", AuthSchema);
