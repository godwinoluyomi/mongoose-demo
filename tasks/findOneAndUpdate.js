const mongoose = require("mongoose");
const Person = require("../src/models/person.js");

async function updatePersonAgeByName(personName) {
  try {
    // Find a person by name and set the person's age to 20
    const updatedPerson = await Person.findOneAndUpdate(
      { name: personName },
      { $set: { age: 20 } },
      { new: true } // Return the updated document
    );

    if (updatedPerson) {
      console.log("Updated Person:", updatedPerson);
    } else {
      console.log("Person not found with name:", personName);
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

module.exports = updatePersonAgeByName;
