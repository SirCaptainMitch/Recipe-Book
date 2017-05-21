import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(
    private slService: ShoppingListService
  ) { }

    private recipes: Recipe[] = [
    new Recipe( 1,
                'Shnitzle', 
                'A favorite in Austria', 
                'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/480px-Recipe_logo.jpeg',
                [
                  new Ingredient('meat', 1),
                  new Ingredient('fries', 20)
                ]
              ),
    new Recipe( 2,
            'A big ole Burger', 
            'This is a big, tasty burger', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/480px-Recipe_logo.jpeg',
            [
              new Ingredient('meat', 1),
              new Ingredient('bread', 2),
              new Ingredient('fries', 21)
            ]
    )
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredient(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  getRecipe(id:number){ 
    const recipe = this.recipes.find( 
                    (x) => { 
                     return  x.id === id 
                    }
                  ); 

    return recipe;
  }

}
