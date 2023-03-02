import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private user:UserService ,private routes: Router){}
   //<!-- @ kirti ( 28/02/23 ) ladd authgaurd on dashboard -->
  canActivate(){
    
    
      if (this.user.IsLoggedIn()){
        return true;
         }
         else {
          this.routes.navigate(['']);
         
          return false;
        }
  }
}
