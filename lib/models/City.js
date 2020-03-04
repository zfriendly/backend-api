const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const City = new Schema({
  restaurants: [],
  museums: []

});

module.exports = mongoose.model("City", City;