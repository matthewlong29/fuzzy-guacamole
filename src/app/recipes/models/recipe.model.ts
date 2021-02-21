export class RecipeCard {
  id: string;
  creationDate: Date;

  name: string;
  description: string;
  categories: Array<string>;

  constructor(name: string, description: string, categories: Array<string>) {
    this.creationDate = new Date(Date.now());

    this.name = name;
    this.description = description;
    this.categories = categories;
  }
}

export class Recipe extends RecipeCard {
  ingredients: Array<Ingredient>;
  instructions: Array<Instruction>;

  prepMinutes: number;
  cookMinutes: number;

  numberOfPeopleServed: number;
  numberOfComments: number;

  constructor(name: string, description: string, categories: Array<string>) {
    super(name, description, categories);

    this.ingredients = [];
    this.instructions = [];
  }
}

export class Ingredient {
  numberOfIngredient: number;
  ingredientName: string;

  constructor(numberOfIngredient: number, ingredientName: string) {
    this.numberOfIngredient = numberOfIngredient;
    this.ingredientName = ingredientName;
  }
}

export class Instruction {
  stepNumber: number;
  step: string;

  constructor(stepNumber: number, step: string) {
    this.stepNumber = stepNumber;
    this.step = step;
  }
}