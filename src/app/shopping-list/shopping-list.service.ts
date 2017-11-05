import { Subject } from "rxjs/Subject";

import { Ingredient } from "../Shared/ingredient.model";

export class ShoppingListService {

  public ingredientAdded = new Subject<Ingredient[]>();
  public startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 4)
  ];

    getIngredient(index: number) {
      return this.ingredients[index];
    }
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
    updateIngredient(index: number, ingredient: Ingredient) {
      this.ingredients[index] = ingredient;
      this.ingredientAdded.next(this.ingredients.slice());
    }
    deleteIngredient(index: number) {
      this.ingredients.splice(index, 1);
      this.ingredientAdded.next(this.ingredients.slice());
    }
}
