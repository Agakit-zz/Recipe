import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/igredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schitzel', 
      'A Super-Tasty Schitzel', 
      'https://s1.eda.ru/StaticContent/Photos/130410124428/130420092928/p_O.jpg',
      [
        new Ingredient ('Meat', 1),
        new Ingredient ('French Fries', 20)
      ]),
      new Recipe(
        'Fat Burger', 
        'A Super-Tasty Fat Burger', 
        'https://bakedpizza.com.co/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/h/a/hamburguesa_doble_carne_1.png',
        [
          new Ingredient ('Meat', 1),
          new Ingredient ('Buns', 2)
        ])
  ];
  
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
