const restaurantData = require("./restaurantData.json");
const Restaurant = require("../models/Restaurant");
const museumData = require("./museumData.json");
const Museum = require("../models/Museum");
const cityData = require("./cityData.json");
const City = require("../models/City");

// Seeding restaurants collection
Restaurant.remove({}).then(() => {
  Restaurant.create(restaurantData)
    .then(food => {
      console.log(food);
    })
    .catch(err => {
      console.log(err);
    });
});
// Seeding museums collection
Museum.remove({}).then(() => {
  Museum.create(museumData)
    .then(museums => {
      console.log(museums);
    })
    .catch(err => {
      console.log(err);
    });
});

// Seeding cities collection
City.remove({}).then(() => {
  City.create(cityData)
    .then(cities => {
      console.log(cities);
    })
    .catch(err => {
      console.log(err);
    });
});
