import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';


@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

    private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 
                'This is simply a test', 
                'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/480px-Recipe_logo.jpeg'
              ),
    new Recipe('A Test Recipe', 
            'This is simply a test', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/480px-Recipe_logo.jpeg'
          )
  ];

  getRecipes(){
    return this.recipes.slice();
  }

}
