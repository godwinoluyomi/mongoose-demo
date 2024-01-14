const mongoose = require("mongoose");
require("dotenv").config();
const Person = require("./src/models/person.js");
const createRandomPerson = require("./tasks/createPerson.js");
const createManyPersons = require("./tasks/createPersons.js");
const findPeopleByName = require("./tasks/searchByName.js");
const findOnePersonByFood = require("./tasks/findOneByFood.js");
const findPersonById = require("./tasks/findById.js");
const performClassicUpdate = require("./tasks/classicUpdate.js");
const updatePersonAgeByName = require("./tasks/findOneAndUpdate.js");
const removePersonById = require("./tasks/findByIdAndRemove.js");
const deletePeopleByName = require("./tasks/deleteMany.js");
const findBurritoLovers = require("./tasks/chainQueryHelpers.js");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", async () => {
  console.log("Connected to MongoDB Atlas!");

  // TASK 1: Create and Save a Record of a Model
  await createRandomPerson();

  // TASK 2: Create Many Records with model.create(). Set the number of records to create in the argument.
  await createManyPersons(10);

  // TASK 3: Use model.find() to Search Your Database
  await findPeopleByName("Grace");

  // Task 4: Use model.findOne() to Return a Single Matching Document from Your Database
  await findOnePersonByFood("Rice");

  // Task 5: Use model.findById() to Search Your Database By _id
  await findPersonById("65a3040035a883e200a28b1a");

  // TASK 6: Perform Classic Updates by Running Find, Edit, then Save
  const personId = "65a31b0f95532c44627c350e";
  await performClassicUpdate(personId);

  // TASK 7: Perform New Updates on a Document Using model.findOneAndUpdate()
  const personName = "fd5pty";
  await updatePersonAgeByName(personName);

  // TASK 8: Delete One Document Using model.findByIdAndRemove
  const personIdDelete = "65a31e6684a395d8e715a4fe";
  await removePersonById(personIdDelete);

  // TASK 9: Delete Many Documents with model.remove()
  const nameToDelete = "Alice";
  await deletePeopleByName(nameToDelete);

  // TASK 10: Chain Search Query Helpers to Narrow Search Results
  await findBurritoLovers();
});
