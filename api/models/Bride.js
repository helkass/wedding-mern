const mongoose = require("mongoose");

const BrideSchema = mongoose.Schema(
  {
    brides: [
      {
        fullname: {
          type: String,
          required: true,
        },
        shortname: {
          type: String,
          required: true,
        },
        age: {
          type: String,
          required: false,
        },
      },
    ],
    address: {
      type: Object,
      required: true,
    },
    bride_date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bride", BrideSchema);
