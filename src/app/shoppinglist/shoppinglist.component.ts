import { Component, OnInit, ViewChild } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shoppinglist.service";
import { ActivatedRoute, Params } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-shoppinglist',
    templateUrl: './shoppinglist.component.html',
    styleUrls: ['./shoppinglist.component.css']

})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [];
    ingredientName: string;

    constructor(private shoppinglistService: ShoppingListService,
        private router: ActivatedRoute) { };

    ngOnInit(): void {
        this.ingredients = this.shoppinglistService.getIngredients();
        this.shoppinglistService.onIngredientsChanged.subscribe(
            (ingredientVal: Ingredient[]) => {
                this.ingredients = ingredientVal;
            }
        );
        // console.log(this.router);
        // this.router.params.subscribe((param: Params) => {
        //     this.ingredientName = param['name'];
        // });
        // console.log(this.ingredientName);
        // console.log(this.router.snapshot.params['amount']);


    }

    onEditItem(itemId: number) {
        this.shoppinglistService.onItemChangd.next(itemId);
    }


}