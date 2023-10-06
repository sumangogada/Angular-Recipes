import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "src/app/shoppinglist/shoppinglist.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RecipesService } from "../recipes.service";

@Component({
    selector: "app-recipedetail",
    templateUrl: "./recipedetail.component.html",
    styleUrls: ["./recipedetail.component.css"]
})
export class RecipeDetailComponent implements OnInit {

    recipeInput: Recipe;
    id: number;
    constructor(private shoppingListService: ShoppingListService,
        private route: ActivatedRoute,
        private recipeService: RecipesService,
        private router: Router) { };
    name = "RecipeDetail";

    ngOnInit(): void {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.recipeInput = this.recipeService.getRecipeItem(this.id);
            }
        );


    }
    addToShopingList() {

        this.recipeInput.ingredients.forEach(element => {
            const newItem = new Ingredient(element.name, element.amount);
            this.shoppingListService.onNewItemAdd(newItem);
        });
    }

    onClick() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }

}