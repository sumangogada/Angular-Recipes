import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";


@Injectable()
export class RecipesService {



    private recipes: Recipe[] = [
        new Recipe('Paneer Tikka',
            'A super tasty Paneer Tikka',
            'https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg'
            , [
                new Ingredient('Paneer', 1),
                new Ingredient('Onions', 2),
                new Ingredient('Tomato', 3)
            ],
            0),
        new Recipe('Lentils Dal',
            'What else you need ?',
            'https://www.indianveggiedelight.com/wp-content/uploads/2022/02/instant-pot-masoor-dal-new.jpg'
            , [
                new Ingredient('Lentils', 1),
                new Ingredient('Tomatoes', 2),
                new Ingredient('Onions', 1)
            ],
            1)

    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipeItem(id: number) {
        return this.recipes[id];
    }
}