const mongoose = require("mongoose");
const Person = require("../src/models/person.js");

async function findPeopleByName(name) {
  try {
    const people = await Person.find({ name });
    console.log(`People with the name "${name}":`, people);
  } catch (err) {
    console.error("Error searching by name:", err);
  }
}

module.exports = findPeopleByName;
