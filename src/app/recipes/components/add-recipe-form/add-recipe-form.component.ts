import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../../models/recipe.model';
import { CreateRecipeService } from '../../services/create-recipe.service';

@Component({
  selector: 'fuzzy-guacamole-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.scss']
})
export class AddRecipeFormComponent implements OnInit {
  public recipeNameForm: FormGroup;
  public recipeIngredientsForm: FormGroup;
  public recipe: Recipe;

  constructor(private createRecipeService: CreateRecipeService) {
    this.recipe = new Recipe();
  }

  ngOnInit(): void {
    this.recipeNameForm = new FormGroup({
      nameControl: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]),
      descriptionControl: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]),
    });

    this.recipeIngredientsForm = new FormGroup({
      numberNeededControl: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      ingredientControl: new FormControl('', Validators.required),
    });
  }

  /**
   * submitNameAndDescription: adds a name and description to the new recipe.
   */
  public submitNameAndDescription() {
    this.recipe.name = this.recipeNameForm.get("nameControl").value;
    this.recipe.description = this.recipeNameForm.get("descriptionControl").value;
  }

  /**
   * addIngredient: adds a new ingredient to the recipe.
   */
  public addIngredient() {
    this.recipe.name = this.recipeIngredientsForm.get("nameControl").value;
    this.recipe.description = this.recipeIngredientsForm.get("descriptionControl").value;
  }

 /**
  * publishRecipe: publishes the recipe to firebase.
  */
  public publishRecipe() {
    this.createRecipeService.createRecipe(this.recipe);
  }
}
