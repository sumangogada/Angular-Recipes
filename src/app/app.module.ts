import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shoppinglist/shoppinglist.component';
import { IngredientComponent } from './shoppinglist/Ingredient/ingredient.component';
import { ShoppingListEditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { RecipeBookComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipeDetailComponent } from './recipes/recipedetail/recipedetail.component';
import { RecipeItemComponent } from './recipes/recipelist/recipeitem/recipeitem.component';
import { RecipeListComponent } from './recipes/recipelist/recipelist.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListService } from './shoppinglist/shoppinglist.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    IngredientComponent,
    ShoppingListEditComponent,
    RecipeBookComponent,
    RecipeComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    HeaderComponent,
    RecipesStartComponent,
    RecipeEditComponent


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
