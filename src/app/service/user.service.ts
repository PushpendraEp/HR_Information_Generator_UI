import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private route:Router) { }
  
  //<!-- @ Ravi ( 28/02/23 ) login api integration -->
  
 
 //<!-- @ kirti ( 28/02/23 )add authgaurd  -->
  login(data:any){
   return this.http.post("http://localhost:3000/loginUser",data)}

  IsLoggedIn(){
      return !!localStorage.getItem('token');
    }
    
  
}
