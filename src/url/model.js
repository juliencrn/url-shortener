const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
  url: { type: String, required: true, unique: true },
  short_url: { type: Number, default: 0 }
});

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
