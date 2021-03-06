import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipesEditComponent } from "./recipes/recipes-edit/recipes-edit.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { AuthGuard } from './auth/auth-gaurd.service';

const appRoutes:Routes = [
    {
        path: 'recipes', component: RecipesComponent,
        children: [
          { path: '', component: RecipeStartComponent }
          , { path: 'new', component: RecipesEditComponent, canActivate: [AuthGuard] }
          , { path: ':id', component: RecipeDetailComponent }
          , { path: ':id/edit', component: RecipesEditComponent, canActivate: [AuthGuard] }
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {path: '**', redirectTo:'/recipes' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
