const mongoose = require("mongoose");
const Person = require("../src/models/person.js");

async function removePersonById(personId) {
  try {
    // Delete one person by the person's _id
    //findByIdAndRemove() is deprecated in Mongoose
    const removedPerson = await Person.findOneAndDelete({ _id: personId });

    if (removedPerson) {
      console.log("Removed Person:", removedPerson);
    } else {
      console.log("Person not found with ID:", personId);
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

module.exports = removePersonById;
