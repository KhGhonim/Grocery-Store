const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const models = mongoose.models;
//Define the Schema (the structure of the user)
const productSchema = new Schema({
  image: String,
  name: String,
  Fakeprice: Number,
  price: Number,
  category: String,
  rating: Number,
  discount: Number,
  description: String,
  stock: Number,
  images: [String],
  type: String,


});
// Create a model based on that schema, and change the name of the model to match your liking.
const ProductModel = models.Product || mongoose.model("Product", productSchema);
// export the model
module.exports = ProductModel;
