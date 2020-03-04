const restaurantData = require("./restaurantData.json");
const Restaurant = require("../models/Restaurant");
const museumData = require("./museumData.json");
const Museum = require("../models/Museum");
const cityData = require("./cityData.json");
const City = require("../models/City");
const museumClean = require("./museums.json");
const restaurantClean = require("./restaurants.json");

City.deleteMany({}).then(() => {
  cityData.forEach(city => {
    Museum.insertMany(museumClean[city.city]).then(museums => {
      Restaurant.insertMany(restaurantClean[city.city]).then(restaurants => {
        City.create({
          city: city.city,
          museums,
          restaurants
        }).then(cities => {
          console.log(cities);
          process.exit();
        });
      });
    });
  });
});
