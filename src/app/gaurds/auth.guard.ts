import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
token:any
     /* @ kirti soni ( 28/03/23 ) add authgaurd */
  constructor(private user:UserService ,private routes: Router,private http: HttpClient){}
   canActivate(){
       /* @ kirti soni ( 21/03/23 ) autologout or user redirect to login page when token expired*/
    this.token = localStorage.getItem('token');
    const payload= atob(this.token.split('.')[1])
    console.log(payload)

    const parsepayload=JSON.parse(payload);
    console.log(parsepayload)
    parsepayload.exp > Date.now() /1000 ;
    console.log("token status",   parsepayload.exp > Date.now() /1000)

if(!( parsepayload.exp > Date.now() /1000)){
  localStorage.removeItem('token');
  this.routes.navigate(['']);
}


    if (!this.token) {
    this.routes.navigate(['']);
      return false;
    }
    
      return true;
  
  }
}