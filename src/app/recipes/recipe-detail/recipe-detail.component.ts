import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(
    private slService: RecipeService,
    private route: ActivatedRoute, 
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log(this.recipeService.getRecipe(1))
    this.route.params
        .subscribe(
          (params: Params) => { 
            this.recipe = this.recipeService.getRecipe(+params['id'])
            // console.log(+params['id'])
          }
        )
  }

  onAddToShoppingList(){
    this.slService.addIngredient(this.recipe.ingredients);
  }

  onEditRecipe(){ 
    this.router.navigate(['edit'], {relativeTo: this.route })
  }

}
