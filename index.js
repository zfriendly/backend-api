const express = require("express");
const app = express();
const Restaurant = require("./lib/models/Restaurant");
const Museum = require("./lib/models/Museum");
const City = require("./lib/models/City");
const parser = require("body-parser");

app.use(parser.json());

// All Restaurants query
app.get("/", (req, res) => {
  City.find({})
    .populate("restaurants")
    .populate("museums")
    .then(cities => res.json(cities));
});

// All Restaurants query
app.get("/restaurants", (req, res) => {
  Restaurant.find({}).then(food => res.json(food));
});

// All Museums query
app.get("/museums", (req, res) => {
  Museum.find({}).then(museums => res.json(museums));
});

// All Cities query
app.get("/:city", (req, res) => {
  City.find({ city: { $regex: req.params.city } }).then(cities =>
    res.json(cities)
  );
});

// Query restaurants by city
app.get("/restaurants/:city", (req, res) => {
  Restaurant.find({ city: { $regex: req.params.city } }).then(food =>
    res.json(food)
  );
});

// Query restaurants by Michelin stars
app.get("/restaurants/stars/:michelinStars", (req, res) => {
  Restaurant.find({ michelinStars: req.params.michelinStars }).then(star =>
    res.json(star)
  );
});

// Query restaurants by Michelin stars and city
app.get("/restaurants/:city/stars/:michelinStars", (req, res) => {
  Restaurant.find({
    michelinStars: req.params.michelinStars,
    city: req.params.city
  }).then(star => res.json(star));
});

// Query restaurants by price
app.get("/restaurants/price/:price", (req, res) => {
  Restaurant.find({ price: req.params.price }).then(cost => res.json(cost));
});

// Query museums by city
app.get("/museums/:city", (req, res) => {
  Museum.find({ city: { $regex: req.params.city } }).then(museums =>
    res.json(museums)
  );
});

// Create a new city
app.post("/city", (req, res) => {
  console.log(req.body);
  City.create(req.body).then(city => res.json(city));
});

// Create a new restaurant
app.post("/restaurant", (req, res) => {
  console.log(req.body);
  Restaurant.create(req.body).then(food => res.json(food));
});

// Create a new museum
app.post("/museum", (req, res) => {
  console.log(req.body);
  Museum.create(req.body).then(zoo => res.json(zoo));
});
// Search for a city guide by city name, including restaurants and museums
app.get("/cityguide/:city", (req, res) => {
  City.findOne({ city: { $regex: req.params.city } })
    .populate("restaurants")
    .populate("museums")
    .then(city => {
      res.json(city);
    });
});

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
