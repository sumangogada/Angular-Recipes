import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable()
export class ShoppingListService {

    onIngredientsChanged = new Subject<Ingredient[]>();
    onItemChangd = new Subject<number>();
    ingredient: Ingredient;
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

    onUpdateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.onIngredientsChanged.next(this.ingredients.slice());
    }
    onDeleteItem(index: number) {
        this.ingredient = this.ingredients[index];
        if (this.ingredient != null) {
            this.ingredients.splice(index, 1);
            this.onIngredientsChanged.next(this.ingredients.slice());
        }
    }
    onNewItemAdd(newItemVal: Ingredient) {
        this.ingredients.push(newItemVal);
        this.onIngredientsChanged.next(this.ingredients.slice());

    }
}