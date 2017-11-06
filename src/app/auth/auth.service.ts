import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  token: string;
  constructor(private router : Router) { }
  signupUser(email: string, password: string) {
    debugger
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
      error => console.log(error)
      );
  }
  signinUser(email: string, password: string) {
    debugger
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
      response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getToken()
          .then(
          token => this.token = token
          );
      }        
      )
      .catch(
      error => console.log(error)
      );
  }
  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
      token => this.token = token
    );
    return this.token;
  }
  isAuthiticated() {
    return this.token != null
  }
  logout() {
    firebase.auth().signOut();
    this.token = null;    
  }
}
