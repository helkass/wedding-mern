const mongoose = require("mongoose");

const CommentsSchema = mongoose.Schema(
  {
    bride_id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: false,
    },
    comment: {
      type: String,
      maxLength: 200,
      required: false,
    },
    status: {
      type: String,
      default: "hadir",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comments", CommentsSchema);
