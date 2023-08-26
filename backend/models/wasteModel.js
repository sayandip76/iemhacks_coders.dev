const mongoose = require("mongoose");

require("../connectServer");

const wasteSchema = new mongoose.Schema({
  pricePerUnit: { type: Number, require: true },
  wasteType: { type: String, require: true },
  amountPresent: { type: Number, default: 0 },
  amountRecycled: { type: Number, deafult: 0 },
});
const wasteModel = new mongoose.model("WasteModel", wasteSchema);

module.exports = {
  wasteModel,
};
