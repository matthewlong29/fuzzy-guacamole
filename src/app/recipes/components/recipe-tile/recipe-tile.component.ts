import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'fuzzy-guacamole-recipe-tile',
  templateUrl: './recipe-tile.component.html',
  styleUrls: ['./recipe-tile.component.scss']
})
export class RecipeTileComponent implements OnInit {
  public recipes: Array<Recipe>;
  public recipeForm: FormGroup;

  constructor(private recipeService: RecipeService) {
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

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Recipe;
      });

      console.log(this.recipes);
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
    recipe.categories = ['chicken', 'chinese', ]
    this.recipeService.createRecipe(recipe);
  }

  /**
   * update: update an existing recipe.
   */
  public update(recipe: Recipe) {
    this.recipeService.updateRecipe(recipe);
  }

  /**
   * delete: delete a recipe.
   */
  public delete(id: string) {
    this.recipeService.deleteRecipe(id);
  }
}
