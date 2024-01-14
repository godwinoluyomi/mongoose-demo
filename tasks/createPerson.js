const mongoose = require("mongoose");
const Person = require("../src/models/person.js");
const {
  generateRandomName,
  generateRandomAge,
  generateRandomFavoriteFoods,
} = require("./randomUtils.js");

async function createRandomPerson() {
  // Generate a random person
  const newPerson = new Person({
    name: generateRandomName(),
    age: generateRandomAge(),
    favoriteFoods: generateRandomFavoriteFoods(),
  });

  try {
    // Save the new person to the database using promises
    const savedPerson = await newPerson.save();
    console.log("Person saved successfully:", savedPerson);
  } catch (err) {
    console.error("Error saving person:", err);
  }
}

module.exports = createRandomPerson;
