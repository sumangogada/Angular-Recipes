import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shoppinglist.service";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Params } from "@angular/router";


@Component({
    selector: 'app-shoppinglistedit',
    templateUrl: './shoppinglistedit.component.html',
    styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
    name = "ShoppingListEdit";

    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;

    @ViewChild('f') singupForm: NgForm;
    subscription: Subscription;
    editIngredient: Ingredient;

    constructor(private shoppingListService: ShoppingListService) { };
    editedItem: number;
    editMode = false;
    ngOnInit(): void {
        this.subscription = this.shoppingListService.onItemChangd.subscribe((index: number) => {
            this.editedItem = index;
            this.editMode = true;
            this.editIngredient = this.shoppingListService.getIngredient(index);
            this.singupForm.setValue({
                name: this.editIngredient.name,
                amount: this.editIngredient.amount
            })
        });
    }
    onAddItem() {
        console.log(this.singupForm.form);
        const ingName = this.singupForm.value.shoppingListData.nameInput;
        const ingAmt = this.singupForm.value.shoppingListData.amount;

        const newItemAdded = new Ingredient(ingName, ingAmt);
        this.shoppingListService.onNewItemAdd(newItemAdded);
    }

    onClear() {
        this.singupForm.form.patchValue({
            shoppingListData: {
                nameInput: '',
                amount: ''
            }
        })
    }

    ngOnDestroy(): void {
        this.shoppingListService.onItemChangd.unsubscribe();
    }
}