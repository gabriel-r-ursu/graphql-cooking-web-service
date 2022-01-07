const { DataSource } = require("apollo-datasource");

const recipes = [
  {
    id: "1",
    name: "recipe #1",
    ingredients: ["1", "2"],
  },
  {
    id: "2",
    name: "recipe #2",
    ingredients: ["3", "4"],
  },
];

class RecipesAPI extends DataSource {
  constructor() {
    super();
  }

  initialize() {}

  getRecipies() {
    return recipes;
  }

  getRecipeById(id) {
    return recipes.filter((recipe) => {
      return id === recipe.id;
    })[0];
  }

  addRecipe(recipe) {
    const addedRecipe = {
      id: Math.floor(Math.random() * 1000000),
      ...recipe,
    };

    recipes.push(addedRecipe);
    return addedRecipe;
  }
}

module.exports = RecipesAPI;
