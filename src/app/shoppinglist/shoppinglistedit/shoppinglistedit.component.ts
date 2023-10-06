import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shoppinglist.service";
import { NgForm } from "@angular/forms";


@Component({
    selector: 'app-shoppinglistedit',
    templateUrl: './shoppinglistedit.component.html',
    styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
    name = "ShoppingListEdit";

    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;

    @ViewChild('f') singupForm: NgForm;
    shoppingListName: string;

    @Input('shoppingListInput') input: { name: string, amount: string };

    constructor(private shoppingListService: ShoppingListService) { };

    ngOnInit(): void {

    }
    onAddItem() {

        const ingName = this.singupForm.value.shoppingListData.nameInput;
        const ingAmt = this.singupForm.value.shoppingListData.amount;

        const newItemAdded = new Ingredient(ingName, ingAmt);
        this.shoppingListService.onNewItemAdd(newItemAdded);
    }

    onFormSubmit() {
        console.log(this.singupForm.form);

    }

    onClear() {
        this.singupForm.form.patchValue({
            shoppingListData: {
                nameInput: '',
                amount: ''
            }
        })
    }

    onDelete() {
        (console.log(this.input.name));
    }
}