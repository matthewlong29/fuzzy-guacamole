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
  public recipeForm: FormGroup;

  constructor(private createRecipeService: CreateRecipeService) {

  }

  ngOnInit(): void {
    this.recipeForm = new FormGroup({
      nameControl: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]),
      descriptionControl: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]),
      numberOfIngredientsControl: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      instructionsControl: new FormControl('', Validators.required),
      timeToPrepControl: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      timeToCookControl: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      numberOfLikesControl: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      numberOfCommentsControl: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    });
  }

    /**
   * create: create a new recipe.
   */
  public create() {
    const recipe = new Recipe();
    recipe.name = this.recipeForm.get("nameControl").value;
    recipe.description = this.recipeForm.get("descriptionControl").value;
    recipe.creationDate = new Date(Date.now());
    recipe.numberOfIngredients = this.recipeForm.get("numberOfIngredientsControl").value;
    recipe.instructions = this.recipeForm.get("instructionsControl").value;
    recipe.timeToPrep = this.recipeForm.get("timeToPrepControl").value;
    recipe.timeToCook = this.recipeForm.get("timeToCookControl").value;
    recipe.numberOfLikes = this.recipeForm.get("numberOfLikesControl").value;
    recipe.numberOfComments = this.recipeForm.get("numberOfCommentsControl").value;
    recipe.categories = ['chicken', 'chinese',];
    this.createRecipeService.createRecipe(recipe);
  }

}
