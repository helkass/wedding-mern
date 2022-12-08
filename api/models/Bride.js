const mongoose = require("mongoose");

const BrideSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      required:true,
    },
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
        father: {
          type: String,
          required: false,
        },
        mother: {
          type: String,
          required: false,
        },
        image: {
          type: String,
          required: false,
          default: ""
        }
      },
    ],
    template: {
      type: String,
      required: true,
    },
    rekening: {
      type: String,
      required: false
    },
    address: {
      type: Object,
      required: true,
    },
    url_map: {
      type: Object,
      required: false
    },
    music: {
      type: String,
      required: false
    },
    bride_date: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: false,
      default: ""
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bride", BrideSchema);
