
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    { path: '' , redirectTo:  '/recipes' },
    { path: 'recipes' , component: RecipesComponent },
    { path: 'shoppinglist', component: ShoppingListComponent }
]


@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { 

}