import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private firestore: AngularFirestore) { }

  public getRecipes() {
    return this.firestore.collection('recipes').snapshotChanges();
  }

  public createRecipe(recipe: Recipe) {
    return this.firestore.collection('recipes').add(Object.assign({}, recipe));
  }

  public updateRecipe(recipe: Recipe) {
    delete recipe.id;
    this.firestore.doc('recipes/' + recipe.id).update(recipe);
  }

  public deleteRecipe(recipeId: string) {
    this.firestore.doc('recipes/' + recipeId).delete();
  }
}
