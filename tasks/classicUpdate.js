const findPersonById = require("./findById");

async function performClassicUpdate(personId) {
  try {
    // Find a person by _id (use any of the above methods to get personId)
    const person = await findPersonById(personId);

    // console.log(person);

    // Add "hamburger" to the list of the person's favoriteFoods
    if (person) {
      person.favoriteFoods.push("hamburger");

      // Mark the 'favoriteFoods' field as modified
      person.markModified("favoriteFoods");

      // Save the updated Person
      const updatedPerson = await person.save();
      console.log("Updated Person:", updatedPerson);
    } else {
      console.log("Person not found with ID:", personId);
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

module.exports = performClassicUpdate;
