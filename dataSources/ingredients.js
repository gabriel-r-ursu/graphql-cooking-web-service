const { DataSource } = require("apollo-datasource");

const ingredients = [
  {
    id: "1",
    name: "i #134534",
    quantity: 12,
  },
  {
    id: "2c",
    name: "i #2",
    quantity: 123,
  },
  {
    id: "3",
    name: "i #3",
    quantity: 124,
  },
  {
    id: "4",
    name: "i #4",
    quantity: 125,
  },
];

class IngredientsAPI extends DataSource {
  constructor() {
    super();
  }

  initialize() {}

  getIngredients() {
    return ingredients;
  }

  getIngredientById(id) {
    const filteredIngredient = ingredients.filter((ingredient) => {
      return id == ingredient.id;
    });
    return filteredIngredient[0];
  }

  addIngredient(ingredient) {
    const addedIngredient = {
      id: Math.floor(Math.random() * 1000000),
      ...ingredient,
    };
    ingredients.push(addedIngredient);
    return addedIngredient;
  }
}

module.exports = IngredientsAPI;
