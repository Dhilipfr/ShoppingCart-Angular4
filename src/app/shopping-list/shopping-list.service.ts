import { Subject } from "rxjs/Subject";

import { Ingredient } from "../Shared/ingredient.model";

export class ShoppingListService {

    public ingredientAdded = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 4)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        debugger;
        this.ingredients.push(...ingredients);
        this.ingredientAdded.next(this.ingredients.slice());
    }
}
