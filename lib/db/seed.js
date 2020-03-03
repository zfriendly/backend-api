const restaurantData = require("./restaurantData.json");
const Restaurant = require("../models/Restaurant");
const museumData = require("./museumData.json");
const Museum = require("../models/Museum");

Restaurant.remove({});
Restaurant.create(restaurantData)
  .then(food => {
    console.log(food);
  })
  .catch(err => {
    console.log(err);
  });

Museum.remove({});
Museum.create(museumData)
  .then(museums => {
    console.log(museums);
  })
  .catch(err => {
    console.log(err);
  });
