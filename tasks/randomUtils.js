function generateRandomName() {
  // Logic to generate a random name
  // Example: Return a combination of random characters
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Emma",
    "Frank",
    "Grace",
    "Henry",
    "Ivy",
    "Jack",
    "Katie",
    "Leo",
    "Mia",
    "Nathan",
    "Olivia",
    "Paul",
    "Quinn",
    "Ryan",
    "Sophia",
    "Tom",
  ];
  return getRandomElement(names);
}

function generateRandomAge() {
  // Logic to generate a random age
  // Example: Return a random number between 18 and 99
  return Math.floor(Math.random() * (99 - 18 + 1) + 18);
}

function generateRandomFavoriteFoods() {
  // Logic to generate random favorite foods
  // Example: Return an array with two random foods
  const foods = [
    "Pizza",
    "Burger",
    "Rice",
    "Beans",
    "Salad",
    "Spaghetti",
    "Sushi",
    "Tacos",
    "Chicken Curry",
    "Pasta Carbonara",
    "Steak",
    "Fish and Chips",
    "Shawarma",
    "Ice Cream",
    "Chocolate Cake",
    "Burritos",
    "burrito",
  ];
  return [getRandomElement(foods), getRandomElement(foods)];
}

function getRandomElement(array) {
  // Helper function to get a random element from an array
  return array[Math.floor(Math.random() * array.length)];
}

module.exports = {
  generateRandomName,
  generateRandomAge,
  generateRandomFavoriteFoods,
};
