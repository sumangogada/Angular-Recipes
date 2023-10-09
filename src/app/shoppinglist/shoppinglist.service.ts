import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable()
export class ShoppingListService {

    onIngredientsChanged = new EventEmitter<Ingredient[]>();
    onItemChangd = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 5)
    ];

    newAddedItem = new EventEmitter<Ingredient>();

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }
    onNewItemAdd(newItemVal: Ingredient) {
        this.ingredients.push(newItemVal);
        this.onIngredientsChanged.emit(this.ingredients);

    }
}