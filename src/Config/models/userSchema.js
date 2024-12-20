const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const models = mongoose.models;
//Define the Schema (the structure of the user)
const productSchema = new Schema({
  fristname: String,
  lastname: String,
  email: String,
  password: String,
});
// Create a model based on that schema, and change the name of the model to match your liking.
const UserModel = models.User || mongoose.model("User", productSchema);
// export the model
module.exports = UserModel;
