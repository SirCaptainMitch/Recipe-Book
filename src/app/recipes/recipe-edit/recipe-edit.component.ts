import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  
  id: number; 
  editMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private rService: RecipeService
  ) { }

  ngOnInit() {
    this.route.params
        .subscribe(
          (params: Params) => { 
            this.id = +params['id']
            this.editMode = params['id'] != null;          }
        )
  }

}
