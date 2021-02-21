import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredient, Instruction, Recipe } from '../../models/recipe.model';
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
    this.recipe = new Recipe('Chicken Noodle Soup', 'Like the best chicken noodle soup or something', []);

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
    

    const numberOfIngredient = this.recipeIngredientsForm.get("numberNeededControl").value;
    const ingredientName = this.recipeIngredientsForm.get("ingredientControl").value;
    const ingredient = new Ingredient(numberOfIngredient, ingredientName);

    this.recipe.ingredients.push(ingredient);
  }

  /**
   * publishRecipe: publishes the recipe to firebase.
   */
  public publishRecipe() {
    // TODO add form for prep and cook minutes
    this.recipe.cookMinutes = Math.floor(Math.random() * 10);
    this.recipe.prepMinutes = Math.floor(Math.random() * 15);

    // TODO add form for categories
    const possibleCategories: Array<string> = [
      'Burgers',
      'Chicken',
      'Desserts',
      'Sandwiches',
      'Mexican',
      'Breakfast',
      'Pizza',
      'Chinese',
      'Healthy',
      'Barbecue',
      'Asian',
      'Seafood',
      'Soup',
      'Italian',
      'Sushi'
    ];
    this.recipe.categories.push(possibleCategories[Math.floor(Math.random() * 10)]);

    // TODO add form for instructions
    const possibleInstructions: Array<Instruction> = [
      new Instruction(1, 'Season steak with paprika, salt, and pepper all over. Add soy sauce, Worcestershire sauce, mustard, and hot sauce to a resealable bag. Add steak and toss around to make sure steak is covered. Refrigerate for 2 hours.'),
      new Instruction(2, 'Remove steak from marinade and discard extra marinade. In a large skillet over medium heat, heat oil. Add steak and cook tossing around for 5 minutes. Remove from skillet.'),
      new Instruction(4, 'Return skillet over medium heat and melt butter. Add garlic and cook until fragrant, 1 minute. Add mushrooms and thyme and cook until mushrooms are golden, about 5 minutes. Return steak to skillet and toss to warm through.'),
      new Instruction(3, 'Make fried leek greens: Pat leek greens dry with a paper towel. In a large pot over medium heat, heat enough oil to thinly coat the bottom of the pot, about 3 tablespoons. Add in leek greens and stir, frying until golden and crispy, about 6 minutes. Transfer fried leeks to a plate and sprinkle with salt.'),
      new Instruction(2, 'Return pot to medium-high heat and melt butter. Add in remaining leeks, celery, and 1 teaspoon salt, and cook, stirring occasionally, until softened and slightly golden and volume has decreased by over half, about 20 minutes.'),
      new Instruction(1, 'Push vegetables to the sides of the pot and add in 1 tablespoon oil more. Add anchovy, garlic, white and black pepper, coriander, fennel seeds, and MSG. Stir until anchovy has melted into the mixture and spices are fragrant, 1 minute.'),
      new Instruction(2, 'Remove from heat and stir in half and half. For a chunkier soup, serve as is or use a potato masher to partially mash potatoes to desired consistency. Alternatively, for a smooth soup, use a blender or immersion blender to blend soup until creamy.'),
      new Instruction(3, 'Serve soup topped with a swirl of half and half, some fried leek greens, a sprinkle of Parmesan, and toasted bread, if desired.'),
      new Instruction(4, 'Fill a small bowl with water. Work with one wrapper at a time and keep remaining wrappers covered with a damp paper towel. Place a wrapper on a clean surface and place a heaping teaspoon of filling in center of wrapper. Dip your finger in water and wet all edges of wrapper.'),
      new Instruction(3, 'Seal wrapper together by making folds starting on one end and working your way towards the other end. Use more water to help seal dumplings tightly. Repeat with remaining wrappers and filling.'),
    ];
    for (let i = 0; i < 3; i++) {
      const instruction = possibleInstructions[Math.floor(Math.random() * 10)];
      instruction.stepNumber = i + 1;

      this.recipe.instructions.push(instruction);
    }

    // TODO add form for ingredients
    const possibleIngredients: Array<Ingredient> = [
      new Ingredient(1, 'butter'),
      new Ingredient(2, 'salt'),
      new Ingredient(4, 'black pepper'),
      new Ingredient(3, 'chicken'),
      new Ingredient(2, 'waffle'),
      new Ingredient(1, 'bacon'),
      new Ingredient(2, 'thyme'),
      new Ingredient(3, 'steak'),
      new Ingredient(4, 'cream cheese'),
      new Ingredient(3, 'hot dog buns'),
      new Ingredient(3, 'garlic'),
      new Ingredient(3, 'noodle'),
      new Ingredient(3, 'avocado'),
      new Ingredient(3, 'mexican cheese'),
      new Ingredient(3, 'corn'),
      new Ingredient(3, 'beans'),
      new Ingredient(3, 'pepperoni'),
      new Ingredient(3, 'onion'),
      new Ingredient(3, 'mushroom'),
      new Ingredient(3, 'cans of black olives'),
    ];
    for (let i = 0; i < 3; i++) {
      const ingredient = possibleIngredients[Math.floor(Math.random() * 20)];
      ingredient.numberOfIngredient = i + 1;

      this.recipe.ingredients.push(ingredient);
    }

    // TODO add number of people served form
    this.recipe.numberOfPeopleServed = Math.floor(Math.random() * 8);

    this.createRecipeService.createRecipe(this.recipe);
  }
}
