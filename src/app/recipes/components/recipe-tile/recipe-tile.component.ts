import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { DeleteRecipeService } from '../../services/delete-recipe.service';
import { ReadRecipeService } from '../../services/read-recipe.service';
import { UpdateRecipeService } from '../../services/update-recipe.service';

@Component({
  selector: 'fuzzy-guacamole-recipe-tile',
  templateUrl: './recipe-tile.component.html',
  styleUrls: ['./recipe-tile.component.scss']
})
export class RecipeTileComponent implements OnInit {
  public recipes: Array<Recipe>;

  constructor(private readRecipeService: ReadRecipeService, private updateRecipeService: UpdateRecipeService, private deleteRecipeService: DeleteRecipeService) {
  }

  ngOnInit(): void {
    this.readRecipeService.getRecipes().subscribe(data => {
      this.recipes = data.map(e => {
        console.log(e.payload.doc.data());

        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Recipe;
      });
    });
  }

  /**
   * update: update an existing recipe.
   */
  public update(recipe: Recipe) {
    this.updateRecipeService.updateRecipe(recipe);
  }

  /**
   * delete: delete a recipe.
   */
  public delete(id: string) {
    this.deleteRecipeService.deleteRecipe(id);
  }
}
