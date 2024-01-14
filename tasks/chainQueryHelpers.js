const mongoose = require("mongoose");
const Person = require("../src/models/person.js");

async function findBurritoLovers() {
  try {
    // Find people who like burritos, sort them by name, limit the results to two documents,
    // and hide their age. Chain query helpers: .find(), .sort(), .limit(), .select(), and .exec().
    const result = await Person.find({ favoriteFoods: "burrito" })
      .sort("name")
      .limit(2)
      .select("-age")
      .exec();

    console.log("Burrito Lovers:", result);
  } catch (err) {
    console.error("Error:", err);
  }
}

module.exports = findBurritoLovers;
