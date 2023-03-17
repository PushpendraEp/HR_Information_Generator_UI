import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  canActivate() {
    throw new Error('Method not implemented.');
  }


  constructor(private http: HttpClient, private route:Router) { }
  
  //<!-- @ Ravi ( 28/02/23 ) login api integration -->
    /* @ kirti soni ( 9/03/23 ) table data api integration by year */
 
 //<!-- @ kirti ( 28/02/23 )add authgaurd  -->
  login(data:any){
   return this.http.post("http://localhost:3000/loginUser",data)}

      //  @ kirti soni ( 13/03/23 )  api integration for getting admin details
  admin_Details(){
    const gettoken=localStorage.getItem('token')

    return this.http.get( `http://localhost:3000/User?token=${gettoken}`);


  }
  //  @ kirti soni ( 14/03/23 ) api integration for admindetails update details
  updateData(data: any): Observable<any> {
    console.log(data)
    const Data=data
    // const userid=data[0].id
    // console.log(userid)
    const url = `http://localhost:3000/updateUser`;

    return this.http.put<any>(url,Data);
  }

  //  @ kirti soni ( 14-15/03/23 ) api integration generate pay slip
downloadfile(data:any){
  console.log(data) 
  const selectedId=data.emp_id
  const selectedYear=data.year
  const selectedMonth =data.month

 return this.http.get(`http://localhost:3000/payslip?emp_id=${selectedId}&month=${selectedMonth}&year=${selectedYear}`
 ,{responseType:'blob'})
}




  //  @ kirti soni ( 8/03/23 ) api integration for geeting data bsed on year

  public getData(yeardata: any): Observable<any[]> {
  const selectedYear=yeardata;
  console.log(selectedYear);
    
  const url = `http://localhost:3000/getTableData?year=${selectedYear}`;
  return this.http.get<any[]>(url);
  }

  //  @ kirti soni ( 9/03/23 ) api integration for getting table data based on year and monty

  public getmonthyeardata(year: string,month:string): Observable<any[]> {
    const selectedYear=year;
    const selectedMonth=month;
    console.log(selectedYear);
    console.log(selectedMonth);
    
  
      
    const url = `http://localhost:3000/getTable?month=${selectedMonth}&year=${selectedYear}`;
    return this.http.get<any[]>(url);
    }



   /* @ kirti soni ( 9/03/23 ) is token available or not function for authgaurd */ 
 
 IsLoggedIn(){
      return !!localStorage.getItem('token');
    }
    
    
  
  
}
