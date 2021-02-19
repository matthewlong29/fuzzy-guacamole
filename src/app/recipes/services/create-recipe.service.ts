import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class CreateRecipeService {

  constructor(private firestore: AngularFirestore) { }

  // TODO determine how to send nested custom objects
  public createRecipe(recipe: Recipe) {
    return this.firestore.collection('recipes').add(Object.assign({}, recipe, {
      ingredients: Object.assign({}, recipe.ingredients)
    }));
  }
}
