const Airports = require("../data/airports.json");

// console.log(Airports);
let filteredAirports = Airports.filter((el) => {
  return el.country == "Mexico";
});

module.exports = { filteredAirports };
