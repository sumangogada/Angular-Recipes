import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Recipe } from "../../recipe.model";


@Component({
    selector: "app-recipeitem",
    templateUrl: "./recipeitem.component.html",
    styleUrls: ["./recipeitem.component.css"]
})
export class RecipeItemComponent {
    name = "Recipe Item";

    @Input() recipesList: Recipe;
    @Input() index: number;
    //@Output() recipesListToDisplay = new EventEmitter<void>();
    recipesListCopy: Recipe;


}