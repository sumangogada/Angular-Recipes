import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipesService } from "../recipes.service";
import { ActivatedRoute, Router } from "@angular/router";



@Component({
    selector: "app-recipelist",
    templateUrl: "./recipelist.component.html",
    styleUrls: ["./recipelist.component.css"]
})
export class RecipeListComponent implements OnInit {

    // @Output() recipeItemList = new EventEmitter<Recipe>();
    recipes: Recipe[] = [];


    constructor(private recipeService: RecipesService,
        private router: Router,
        private route: ActivatedRoute) { };

    ngOnInit(): void {
        this.recipes = this.recipeService.getRecipes();


    }

    onClick() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }
    // onRecipelist(recipe: Recipe) {
    //     this.recipeItemList.emit(recipe);
    // }

}