export class Recipe {
  id: string;
  name: string;
  description: string;
  categories: Array<string>;
  ingredients: Array<Ingredient>;
  creationDate: Date;
  instructions: string;
  timeToPrep: number;
  timeToCook: number;
  numberOfLikes: number;
  numberOfComments: number;

  constructor() {
    this.categories = [];
    this.ingredients = [];
  }
}

export class Ingredient {
  numberOfIngredient: number;
  ingredientName: string;
}