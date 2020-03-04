const restaurantData = require("./restaurantData.json");
const Restaurant = require("../models/Restaurant");
const museumData = require("./museumData.json");
const Museum = require("../models/Museum");
const cityData = require("./cityData.json");
const City = require("../models/City");

// Seeding cities collection
const city = cityData.map(city => {
  for (let i = 0; i < museumData.length; i++) {
    if (museumData[i].city === cityData.city) {
      city.museums.push(museumData[i]._id);
    }
  }
  console.log(city);
});
