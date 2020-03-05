const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Museum = new Schema({
  name: String,
  type: String,
  city: String,
  state: String,
  latitude: Number,
  longitude: Number,
  zipCode: Number,
  phoneNumber: Number
});

module.exports = mongoose.model("Museum", Museum);
