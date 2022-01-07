const _ = require("lodash");
const { recipes, ingredients } = require("../dataSource");

module.exports = {
  Query: require("./queries"),

  Recipe: {
    ingredients: ({ id }, args, context, info) => {
      const recipe = _.filter(recipes, { id })[0];

      if (!recipe.ingredients) return null;

      return ingredients.filter((ingredient) => {
        return recipe.ingredients.filter((i) => i == ingredient.id).length > 0;
      });
    },
  },

  Mutation: require("./mutations"),
};
