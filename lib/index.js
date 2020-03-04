const express = require("express");
const app = express();
const Restaurant = require("./models/Restaurant");
const Museum = require("./models/Museum");
const parser = require("body-parser");

app.use(parser.json());

// All Restaurants query
app.get("/restaurants", (req, res) => {
  Restaurant.find({}).then(food => res.json(food));
});

// All Museums query
app.get("/museums", (req, res) => {
  Museum.find({}).then(museums => res.json(museums));
});

// Query restaurants by city
app.get("/restaurants/:city", (req, res) => {
  Restaurant.find({ city: req.params.city }).then(food => res.json(food));
});

// Query museums by city
app.get("/museums/:city", (req, res) => {
  Museum.find({ city: req.params.city }).then(museums => res.json(museums));
});

app.listen(3000, () => {
  console.log("Your server is running. Better go catch it!");
});
