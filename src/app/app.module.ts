import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './Shared/dropDown.directive';
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { AppRoutingModule } from "./app-routing.module";
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './Shared/data-storage.service';

@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      RecipesComponent,
      RecipeListComponent,
      RecipeDetailComponent,
      RecipeItemComponent,
      ShoppingListComponent,
      ShoppingEditComponent,
      DropdownDirective,
      RecipeStartComponent,
      RecipesEditComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule
    , FormsModule
    , HttpModule
    , ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
