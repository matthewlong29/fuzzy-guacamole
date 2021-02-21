import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Ingredient, Instruction, Recipe, RecipeCard } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class CreateRecipeService {
  constructor(private firestore: AngularFirestore) { }

  public createRecipe(recipe: Recipe) {
    const recipeCard: RecipeCard = new RecipeCard(recipe.name, recipe.description, recipe.categories);
    const newRecipeCard: RecipeCard = Object.assign({}, recipeCard);

    this.firestore.collection('recipes').add(newRecipeCard).then((data) => {
      for (const instruction in recipe.instructions) {
        const newInstruction = Object.assign({}, instruction);

        this.firestore.collection(`recipes/${data.id}/instructions`).add(newInstruction);
      }

      for (const ingredient in recipe.ingredients) {
        const newIngredient = Object.assign({}, ingredient);

        this.firestore.collection(`recipes/${data.id}/ingredients`).add(newIngredient);
      }
    });
  }
}
