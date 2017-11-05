import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../Shared/ingredient.model'
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') slForm: NgForm;  
  editSubscription: Subscription;
  editMode: boolean = false;
  editItemIndex: number;
  editedIngredient: Ingredient;
   constructor(private slService: ShoppingListService) { }

   ngOnInit() {
     this.editSubscription =  this.slService.startedEditing
       .subscribe(
       (index: number) => {
         this.editMode = true;
         this.editItemIndex = index;
         this.editedIngredient = this.slService.getIngredient(index);
         this.slForm.setValue({
           name: this.editedIngredient.name,
           amount: this.editedIngredient.amount
         });
       }
       );
   }
   ngOnDestroy(): void {
     this.editSubscription.unsubscribe();
   }
  onSubmit(form: NgForm) {
    debugger;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.slForm.reset();
   }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.onClear();
    this.slService.deleteIngredient(this.editItemIndex);
  }
}
