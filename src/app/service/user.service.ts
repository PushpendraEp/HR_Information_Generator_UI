import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  //<!-- @ Ravi ( 28/02/23 ) login api integration -->

  login(data:any){
    this.http.post("http://localhost:3000/loginUser",data).subscribe((result:any)=>{
      localStorage.setItem("token", result.token)
    })
  }
}
