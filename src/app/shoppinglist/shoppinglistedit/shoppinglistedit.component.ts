import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shoppinglist.service";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";


@Component({
    selector: 'app-shoppinglistedit',
    templateUrl: './shoppinglistedit.component.html',
    styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
    name = "ShoppingListEdit";

    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;

    @ViewChild('f', { static: false }) singupForm: NgForm;
    subscription: Subscription;
    editIngredient: Ingredient;

    constructor(private shoppingListService: ShoppingListService) { };
    editedItemIndex: number;
    editMode = false;
    ngOnInit(): void {
        this.subscription = this.shoppingListService.onItemChangd.subscribe((index: number) => {
            this.editedItemIndex = index;
            this.editMode = true;
            this.editIngredient = this.shoppingListService.getIngredient(index);
            this.singupForm.setValue({
                nameInput: this.editIngredient.name,
                amount: this.editIngredient.amount
            })
        });
    }
    onAddItem() {
        console.log(this.singupForm.form);

        const ingName = this.singupForm.value.nameInput;
        const ingAmt = this.singupForm.value.amount;

        const newItemAdded = new Ingredient(ingName, ingAmt);

        if (this.editMode) {
            this.shoppingListService.onUpdateIngredient(this.editedItemIndex, newItemAdded);

        } else {
            this.shoppingListService.onNewItemAdd(newItemAdded);

        }
        this.editMode = false;
        this.singupForm.reset();
    }

    onClear() {

        this.singupForm.reset();
        this.editMode = false;
    }

    onDelete() {
        this.shoppingListService.onDeleteItem(this.editedItemIndex);
        this.singupForm.reset();
        this.editMode = false;
    }

    ngOnDestroy(): void {
        this.shoppingListService.onItemChangd.unsubscribe();
    }
}