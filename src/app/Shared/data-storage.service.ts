import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import 'rxjs/Rx'
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {
  constructor(
    private http: Http
    , private recipeService : RecipeService
  ) { }

  storeRecipe() {
    return this.http.put('https://ng-recipe-book-f956c.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }
  getRecipe() {
    return this.http.get('https://ng-recipe-book-f956c.firebaseio.com/recipes.json')
      .map(
      (response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = []
          }
        }
        return recipes
      }
      )
      .subscribe(
      (response) => {
        this.recipeService.setRecipes(response);
      }
      );
  }
}
