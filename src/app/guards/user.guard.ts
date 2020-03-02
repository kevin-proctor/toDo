import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UserStoreService } from '../services/userStore.service';


@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  
  constructor(private userService: UserStoreService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.userService.isLoggedIn){
      if(next.url[0].path === 'todo'){
        return true
      }
      else{
        return next.params.username === this.userService.currentUser;
      }

      // If it's /user/?? check to see if ?? matches the saved user on the userService
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}