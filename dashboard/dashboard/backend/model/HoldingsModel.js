const mongoose = require("mongoose");
const path = require("path");

const HoldingsSchema = require(
    path.join(__dirname, "..", "schemas", "HoldingsSchema.js")
);

const HoldingsModel = mongoose.model("holdings", HoldingsSchema);

module.exports = { HoldingsModel };