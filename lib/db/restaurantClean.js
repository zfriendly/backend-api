const restaurantData = require("./restaurantData.json");
const fs = require("fs");

let newJSON = restaurantData.reduce((acc, restaurant) => {
  if (!acc[restaurant.city]) {
    acc[restaurant.city] = [];
  }

  acc[restaurant.city].push(restaurant);
  return acc;
}, {});

console.log(newJSON);

fs.writeFile("./restaurants.json", JSON.stringify(newJSON), () =>
  console.log("Restaurant json created")
);
