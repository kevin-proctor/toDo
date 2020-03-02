import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  isLoggedIn: boolean = false;
  constructor(private router: Router) { }

  get currentUser(){
    return localStorage.getItem("user")
  }

  login(username, password){
    this.isLoggedIn = true;
    localStorage.setItem("user", username);
    this.router.navigate([`/user/${username}`])
  }
  
  logout(){
    this.isLoggedIn = false;
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  
}