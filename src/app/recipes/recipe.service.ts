import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../Shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {

  recipeChanged = new Subject<Recipe[]>();
    constructor(private slService : ShoppingListService) { }
    
    private recipes: Recipe[] = [
        new Recipe(
            'Big Fat Burger'
            , 'What else you need to say?'
            , 'http://ichef.bbci.co.uk/food/ic/food_16x9_608/recipes/braised_steak_with_gravy_24508_16x9.jpg'
            , [
                new Ingredient('test1', 1),
                new Ingredient('test1', 1)
            ]
        ),
        new Recipe(
            'Tasty schnitzel'
            , 'A super-tasty schnitzel - just awesome'
            , 'http://ichef.bbci.co.uk/food/ic/food_16x9_608/recipes/braised_steak_with_gravy_24508_16x9.jpg'
            , [
                new Ingredient('test2',2)
            ]
        )
    ];

    setRecipes(recipes: Recipe[]) {
      this.recipes = recipes;
      this.recipeChanged.next(this.recipes.slice());
    }
    
    public getRecipes() {
        return this.recipes.slice();
    }
    getRecipeByIndex(index: number) {
        return this.recipes.slice()[index];
    }
    public addToShoppingList(ing: Ingredient[]) {
        this.slService.addIngredients(ing);
    }
    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipeChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, recipe: Recipe) {
      this.recipes[index] = recipe;
      this.recipeChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipeChanged.next(this.recipes.slice());
    }
}
