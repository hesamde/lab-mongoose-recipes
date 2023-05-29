const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
//const LevelType = require("./models/Recipe.model").LevelType;
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    // return Recipe.deleteMany();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    Recipe.create({
      name: "GhormeSabzi",
      level: "Amateur Chef",
      ingredients: [
        "1/2 cup rice vinegar",
        "5 tablespoons honey",
        "1/3 cup soy sauce (such as Silver Swan®)",
        "1/4 cup Asian (toasted) sesame oil",
        "3 tablespoons Asian chili garlic sauce",
        "3 tablespoons minced garlic",
        "salt to taste",
        "8 skinless, boneless chicken thighs",
      ],
      cuisine: "Persian",
      dishType: "main_course",
      image:
        "https://www.2nafare.com/wp-content/uploads/2015/01/ghormeh-sabzi-500x334.jpg",
      duration: 120,
      creator: "Chef Hesam",
      created: Date.now(),
    });
  })
  .then(() => {
    const status = Recipe.insertMany(data).then((status) => {
      console.log(status);
      console.log("Insert many has been successfully executed!");
    });
  })
  .then(() => {
    Recipe.update;
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
