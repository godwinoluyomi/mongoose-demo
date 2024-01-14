const mongoose = require("mongoose");
const Person = require("../src/models/person.js");

async function deletePeopleByName(name) {
  try {
    // Delete all the people whose name is "Mary"
    // model.remove() does not take an argument., I used deleteMany instead.
    const result = await Person.deleteMany({ name: name });

    console.log("Deletion Result:", result);
  } catch (err) {
    console.error("Error:", err);
  }
}

module.exports = deletePeopleByName;
