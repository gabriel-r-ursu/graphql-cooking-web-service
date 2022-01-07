const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    getRecipies: [Recipe]
    getRecipeById(recipeId: ID!): Recipe

    getIngredients: [Ingredient]
    getIngredientById(ingredientId: ID!): Ingredient

    getMeals: [Meal]
  }

  type Mutation {
    addIngredient(ingredient: IngredientInput!): Ingredient
    addRecipe(recipe: RecipeInput!): Recipe
    prepareMeal(recipeID: ID!): Meal
  }

  type Ingredient {
    id: ID!
    name: String!
    quantity: Int!
  }

  type Recipe {
    id: ID!
    name: String!
    timeToCook: Int
    difficulty: String
    ingredients: [Ingredient]
  }

  type Meal {
    id: ID!
    name: String!
    nutritionScore: Int
    recipe: Recipe
  }

  input IngredientInput {
    name: String!
    quantity: Int!
  }

  input RecipeInput {
    name: String!
    timeToCook: Int
    difficulty: String
  }
`;
