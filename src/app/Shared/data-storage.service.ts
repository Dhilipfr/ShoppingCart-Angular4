import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import 'rxjs/Rx'
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(
    private http: Http
    , private recipeService: RecipeService
    , private authService : AuthService
  ) { }

  storeRecipe() {
    const token = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-f956c.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }
  getRecipe() {
    const token = this.authService.getToken();
    return this.http.get('https://ng-recipe-book-f956c.firebaseio.com/recipes.json?auth=' + token)
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
