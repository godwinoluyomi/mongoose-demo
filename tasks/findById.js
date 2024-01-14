const mongoose = require("mongoose");
const Person = require("../src/models/person.js");

async function findPersonById(personId) {
  try {
    const person = await Person.findById(personId);
    console.log(`Person with ID "${personId}":`, person);
    return person;
  } catch (err) {
    console.error("Error searching by ID:", err);
  }
}

module.exports = findPersonById;
