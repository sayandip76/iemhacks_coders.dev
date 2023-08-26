const mongoose = require("mongoose");

require("../connectServer");

const nftSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  ipfs: { type: String, required: true },
});

const productSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, require: true },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  price: { type: Number, require: true },
  status:{type:String,enum:['Sold','NotSold'],default:'NotSold'}
});

const nftModel = new mongoose.model("NftModel", nftSchema);
const productModel = new mongoose.model("ProductModel", productSchema);

module.exports = {
  nftSchema,
  productSchema,
  nftModel,
  productModel,
};
