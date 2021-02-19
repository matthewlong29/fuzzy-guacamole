import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReadRecipeService {

  constructor(private firestore: AngularFirestore) { }

  public getRecipes() {
    return this.firestore.collection('recipes').snapshotChanges();
  }
}
