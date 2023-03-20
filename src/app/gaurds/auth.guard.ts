import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
     /* @ kirti soni ( 28/03/23 ) add authgaurd */
  constructor(private user:UserService ,private routes: Router,private http: HttpClient){}
   canActivate(){
    const token = localStorage.getItem('token');
    if (!token) {
    this.routes.navigate(['']);
      return false;
    }
    try
     {
      this.user.admin_Details()
      return true;
    } 
    catch (error) 
    {
      this.routes.navigate(['']);
      return false;
    }
  }
}