const IngredientsAPI = require("./ingredients");
const MealsAPI = require("./meals");
const RecipesAPI = require("./recipes");

module.exports = () => ({
  ingredientsAPI: new IngredientsAPI(),
  mealsAPI: new MealsAPI(),
  recipesAPI: new RecipesAPI(),
});
