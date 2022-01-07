module.exports = {
  getIngredients: (parent, args, context, info) => {
    return context.dataSources.ingredientsAPI.getIngredients();
  },

  getIngredientById: (parent, { ingredientId }, context, info) => {
    return context.dataSources.ingredientsAPI.getIngredientById(ingredientId);
  },

  getRecipies: (parent, args, context, info) => {
    return context.dataSources.recipesAPI.getRecipies();
  },

  getRecipeById: (parent, { recipeId }, context, info) => {
    return context.dataSources.recipesAPI.getRecipeById(recipeId);
  },

  getMeals: (parent, args, context, info) => {
    return context.dataSources.mealsAPI.getMeals();
  },
};
