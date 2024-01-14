const mongoose = require("mongoose");
const Person = require("../src/models/person.js");

async function findOnePersonByFood(food) {
  try {
    const person = await Person.findOne({ favoriteFoods: { $in: [food] } });
    console.log(`Person with "${food}" in their favorite foods:`, person);
  } catch (err) {
    console.error("Error searching by food:", err);
  }
}

module.exports = findOnePersonByFood;
