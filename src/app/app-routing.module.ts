import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeBookComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shoppinglist/shoppinglist.component";
import { RecipesStartComponent } from "./recipes/recipes-start/recipes-start.component";
import { RecipeDetailComponent } from "./recipes/recipedetail/recipedetail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { ShoppingListEditComponent } from "./shoppinglist/shoppinglistedit/shoppinglistedit.component";


const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipeBookComponent, children: [
            { path: '', component: RecipesStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent }
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}