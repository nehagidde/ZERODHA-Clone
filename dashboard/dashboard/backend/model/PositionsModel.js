const mongoose = require("mongoose");
const path = require("path");

const PositionsSchema = require(
    path.join(__dirname, "..", "schemas", "PositionsSchema.js")
);

const PositionsModel = mongoose.model("positions", PositionsSchema);

module.exports = { PositionsModel };