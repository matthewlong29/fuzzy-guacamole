import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateRecipeService {

  constructor(private firestore: AngularFirestore) { }

  public updateRecipe(recipe: Recipe) {
    delete recipe.id;
    this.firestore.doc('recipes/' + recipe.id).update(recipe);
  }
}
