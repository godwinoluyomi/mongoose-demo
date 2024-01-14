const mongoose = require("mongoose");

// Define Person Schema and Model
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 8 },
  favoriteFoods: { type: [String] },
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
