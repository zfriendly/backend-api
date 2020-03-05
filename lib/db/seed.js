const Restaurant = require("../models/Restaurant");
const Museum = require("../models/Museum");
const cityData = require("./cityData.json");
const City = require("../models/City");
const museumClean = require("./museums.json");
const restaurantClean = require("./restaurants.json");

// Creates the cities collection, referencing the ObjectID's of each restaurant and museum in arrays within each city
Museum.deleteMany({}).then(() => {
  Restaurant.deleteMany({}).then(() => {
    City.deleteMany({}).then(() => {
      cityData.forEach(city => {
        Museum.insertMany(museumClean[city.city]).then(museums => {
          Restaurant.insertMany(restaurantClean[city.city]).then(
            restaurants => {
              City.create({
                city: city.city,
                museums,
                restaurants
              }).then(cities => {
                console.log(cities);
              });
            }
          );
        });
      });
    });
  });
});
