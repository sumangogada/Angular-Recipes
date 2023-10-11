import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { Subscription } from 'rxjs';
import { RecipesService } from '../recipes.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  newIngredient: Array<{ name: string, amount: number }> = [];
  @ViewChild('f', { static: false }) recipeForm: NgForm;

  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('imagePath') imageInputRef: ElementRef;

  editRecipe: Recipe;
  subscription: Subscription;

  constructor(private router: ActivatedRoute,
    private recipeService: RecipesService) { };

  ngOnInit(): void {

    this.router.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;

      }
    );

    //this.editRecipe = this.recipeService.getRecipeItem(this.id);

  }

  onSubmit() {
    const updtName = this.recipeForm.value.nameInput;
    const updtImage = this.recipeForm.value.imagePath;
    const updtDesc = this.recipeForm.value.description;
    const ingName = this.recipeForm.value.ingredientName;
    const ingAmnt = this.recipeForm.value.ingredientAmount;

    // this.editRecipe.name = this.recipeForm.value.nameInput;
    // this.editRecipe.imagePath = this.recipeForm.value.imagePath;
    // this.editRecipe.description = this.recipeForm.value.description;

    const newIngredients = new Ingredient(ingName, ingAmnt);
    this.newIngredient.push({ name: ingName, amount: ingAmnt });

    const newRecipe = new Recipe(updtName, updtDesc, updtImage, this.newIngredient);

    this.recipeService.updateRecipeItem(this.id, newRecipe);
  }

  onClear() {
    this.recipeForm.reset();
  }

  onSmallClear() {
    this.recipeForm.setValue({
      ingredientName: '',
      ingredientAmount: ''
    })
  }

}
