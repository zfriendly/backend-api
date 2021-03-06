const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const City = new Schema({
  city: String,
  restaurants: [{ type: Schema.Types.ObjectId, ref: "Restaurant" }],
  museums: [{ type: Schema.Types.ObjectId, ref: "Museum" }],
  tileImage: String,
  squareImage: String
});

module.exports = mongoose.model("City", City);
