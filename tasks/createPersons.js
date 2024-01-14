const mongoose = require("mongoose");
const Person = require("../src/models/person.js");
const {
  generateRandomName,
  generateRandomAge,
  generateRandomFavoriteFoods,
} = require("./randomUtils.js");

async function createManyPersons(count) {
  const arrayOfPeople = [];

  for (let i = 0; i < count; i++) {
    const newPerson = new Person({
      name: generateRandomName(),
      age: generateRandomAge(),
      favoriteFoods: generateRandomFavoriteFoods(),
    });

    arrayOfPeople.push(newPerson);
  }

  try {
    const createdPersons = await Person.create(arrayOfPeople);
    console.log(`${createdPersons.length} persons created successfully.`);
  } catch (err) {
    console.error("Error creating persons:", err);
  }
}

module.exports = createManyPersons;
