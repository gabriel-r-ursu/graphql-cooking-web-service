module.exports = {
  addIngredient: (parent, { ingredient }, context, info) => {
    return context.dataSources.ingredientsAPI.addIngredient(ingredient);
  },

  addRecipe: (parent, { recipe }, context, info) => {
    return context.dataSources.recipesAPI.addRecipe(recipe);
  },

  prepareMeal: (parent, { recipeID }, context, info) => {
    const foundRecipe = context.dataSources.recipesAPI.getRecipeById(recipeID);
    return context.dataSources.mealsAPI.addMeal({ name: foundRecipe.name });
  },
};
