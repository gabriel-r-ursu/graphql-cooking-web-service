const { DataSource } = require("apollo-datasource");

const meals = [
  {
    id: "1",
    name: "meal #1",
    recipes: ["1"],
  },
  {
    id: "2",
    name: "meal #2",
    recipes: ["2"],
  },
  {
    id: "3",
    name: "meal #3",
  },
  {
    id: "4",
    name: "meal #4",
  },
];

class MealsAPI extends DataSource {
  constructor() {
    super();
  }

  initialize() {}

  getMeals() {
    return meals;
  }

  addMeal(meal) {
    const addedMeal = {
      id: Math.floor(Math.random() * 1000000),
      ...meal,
    };
    meals.push(addedMeal);
    return addedMeal;
  }
}

module.exports = MealsAPI;
