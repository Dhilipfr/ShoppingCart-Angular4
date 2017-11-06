import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {    
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyAZ-doc1VQeseRUQEbdjXJdG8P-9-l_UHs"
      , authDomain: "ng-recipe-book-f956c.firebaseapp.com"
    });
  }
}
