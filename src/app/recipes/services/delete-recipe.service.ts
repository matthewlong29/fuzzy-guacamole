import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DeleteRecipeService {

  constructor(private firestore: AngularFirestore) { }

  public deleteRecipe(recipeId: string) {
    this.firestore.doc('recipes/' + recipeId).delete();
  }
}
