import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private route:Router) { }

  // loader=new BehaviorSubject<boolean>(false);
  
  //<!-- @ Ravi ( 28/02/23 ) login api integration -->
    /* @ kirti soni ( 9/03/23 ) table data api integration by year */
 
 //<!-- @ kirti ( 28/02/23 )add authgaurd  -->
  login(data:any){
   return this.http.post("http://localhost:3000/loginUser",data);
}

    
  public getData(yeardata: string): Observable<any[]> {
  const selectedYear=yeardata;
  // console.log(selectedYear);
    
  const url = `http://localhost:3000/getTableData?year=${selectedYear}`;
  return this.http.get<any[]>(url).pipe(
    debounceTime(500) // debounce for 500 milliseconds
  );;
  }
   /* @ kirti soni ( 9/03/23 ) is token available or not function for authgaurd */ 
 
 IsLoggedIn(){
      return !!localStorage.getItem('token');
    }
    
  
}
