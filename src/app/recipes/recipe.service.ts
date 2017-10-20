import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'Test description recipe', 'http://ichef.bbci.co.uk/food/ic/food_16x9_608/recipes/braised_steak_with_gravy_24508_16x9.jpg'),
        new Recipe('Another Test Recipe', 'Test description recipe', 'http://ichef.bbci.co.uk/food/ic/food_16x9_608/recipes/braised_steak_with_gravy_24508_16x9.jpg')
    ];

    public getRecipes() {
        return this.recipes.slice();
    }
}
