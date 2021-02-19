import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredient, Recipe } from '../../models/recipe.model';
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

  }

  ngOnInit(): void {
    this.recipe = new Recipe();
    this.recipe.name = 'Chicken Noodle Soup';
    this.recipe.description = 'Like the best chicken noodle soup or something';


    this.recipeNameForm = new FormGroup({
      nameControl: new FormControl(this.recipe.name, [Validators.required, Validators.pattern("^[a-zA-Z]*$")]),
      descriptionControl: new FormControl(this.recipe.description, [Validators.required, Validators.pattern("^[a-zA-Z]*$")]),
    });

    this.recipeIngredientsForm = new FormGroup({
      numberNeededControl: new FormControl(1, [Validators.required, Validators.pattern("^[0-9]*$")]),
      ingredientControl: new FormControl('chicken', Validators.required),
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
    const ingredient = new Ingredient();

    ingredient.numberOfIngredient = this.recipeIngredientsForm.get("numberNeededControl").value;
    ingredient.ingredientName = this.recipeIngredientsForm.get("ingredientControl").value;

    this.recipe.ingredients.push(ingredient);
  }

  /**
   * publishRecipe: publishes the recipe to firebase.
   */
  public publishRecipe() {
    this.createRecipeService.createRecipe(this.recipe);
  }
}
