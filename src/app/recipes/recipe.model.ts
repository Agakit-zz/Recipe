import { Ingredient } from '../shared/igredient.model';

export class Recipe {
  public name: string;
  public descriptioin: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.descriptioin = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
