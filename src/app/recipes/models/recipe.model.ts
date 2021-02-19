export class Recipe {
  id: string;
  name: string;
  description: string;
  categories: Array<string>;
  creationDate: Date;
  numberOfIngredients: number;
  instructions: string;
  timeToPrep: number;
  timeToCook: number;
  numberOfLikes: number;
  numberOfComments: number;
}
