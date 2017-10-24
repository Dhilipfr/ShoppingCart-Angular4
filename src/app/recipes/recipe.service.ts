import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../Shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    constructor(private slService : ShoppingListService) { }

    recipeSelected = new EventEmitter<Recipe>();
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
    
    public getRecipes() {
        return this.recipes.slice();
    }

    public addToShoppingList(ing: Ingredient[]) {
        this.slService.addIngredients(ing);
    }
}
