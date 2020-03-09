const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Restaurant = new Schema({
  name: String,
  michelinStars: String,
  city: String,
  state: String,
  latitude: Number,
  longitude: Number,
  zipCode: Number,
  cuisine: String,
  price: String,
  url: String
});

module.exports = mongoose.model("Restaurant", Restaurant);
