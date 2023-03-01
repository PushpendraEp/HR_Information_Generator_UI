import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private route:Router) { }
  
  //<!-- @ Ravi ( 28/02/23 ) login api integration -->

  login(data:any){
    this.http.post("http://localhost:3000/loginUser",data).subscribe((result:any)=>{
      localStorage.setItem("token", result.token)
      this.route.navigate(['/dashboard'])
    })}

  IsLoggedIn(){
      return !!localStorage.getItem('token');
    }
    
  
}
