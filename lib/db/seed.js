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
      //   console.log(food);
    })
    .catch(err => {
      console.log(err);
    });
});
// Seeding museums collection
Museum.remove({}).then(() => {
  Museum.create(museumData)
    .then(museums => {
      //   console.log(museums);
    })
    .catch(err => {
      console.log(err);
    });
});

let allCity = [];
City.deleteMany({})
  .then(() => {
    Museum.find({}).then(museums => {
      Restaurant.find({}).then(restaurants => {
        allCity = cityData.map(city => {
          let cityRestaurants = [];
          let cityMuseums = [];
          restaurants.forEach(food => {
            if (food.city === city.city) {
              cityRestaurants.push(food._id);
            }
          });
          museums.forEach(art => {
            if (art.city === city.city) {
              cityMuseums.push(art._id);
            }
          });
          return {
            city: city.city,
            restaurants: cityRestaurants,
            museums: cityMuseums
          };
        });
        console.log(allCity);
      });
    });
  })
  .then(() => {
    City.create(allCity)
      .then(cities => {
        console.log(cities);
      })
      .catch(err => {
        console.log(err);
      });
  });
