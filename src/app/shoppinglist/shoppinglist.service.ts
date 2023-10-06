import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {

    onIngredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 5)
    ];

    newAddedItem = new EventEmitter<Ingredient>();

    getIngredients() {
        return this.ingredients.slice();
    }
    onNewItemAdd(newItemVal: Ingredient) {
        this.ingredients.push(newItemVal);
        this.onIngredientsChanged.emit(this.ingredients);

    }
}