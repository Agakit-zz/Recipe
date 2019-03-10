import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://requestreduce.org/images/recipe-book-cover-clipart-22.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://requestreduce.org/images/recipe-book-cover-clipart-22.jpg')
  ];

  getRecipes() {
    // return this.recipes.slice();
    return this.recipes
  }
}
