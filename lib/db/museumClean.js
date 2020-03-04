const museumData = require("./museumData.json");
const fs = require("fs");

let formattedJson = museumData.reduce((acc, museum) => {
  if (!acc[museum.city]) {
    acc[museum.city] = [];
  }

  acc[museum.city].push(museum);
  return acc;
}, {});

console.log(formattedJson);

fs.writeFile("./lib/db/museums.json", JSON.stringify(formattedJson), () =>
  console.log("Museum json created")
);
