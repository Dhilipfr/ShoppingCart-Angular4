import { Component } from '@angular/core';
import { DataStorageService } from '../Shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent {
  constructor(
    private dataStorageService: DataStorageService
    , private authService : AuthService
  ) { }
  onSaveData() {
    this.dataStorageService.storeRecipe()
      .subscribe(
      (response) => {
        console.log(response);
      }
      );
  }
  onFetchData() {
    this.dataStorageService.getRecipe()   
  }
  logout() {
    this.authService.logout();
  }
}
