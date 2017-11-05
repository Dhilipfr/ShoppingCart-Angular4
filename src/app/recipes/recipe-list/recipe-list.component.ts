import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Recipe } from '../recipe.model';
import { RecipeService } from "../recipe.service";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  
  recipes: Recipe[] = [];
  subscription: Subscription;

    constructor(private recipeService: RecipeService
        ,private route:ActivatedRoute
        ,private router:Router
    ) { }

    ngOnInit() {
      this.subscription = this.recipeService.recipeChanged
        .subscribe(
        (recipe) => {
          this.recipes = recipe;
        }
        );
        this.recipes = this.recipeService.getRecipes();
    }
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
    onNewRecipe() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }

}
