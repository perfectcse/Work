const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    description: String,
    isLocked: Boolean,
    partner: String,
    eligibility: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Deal", dealSchema);