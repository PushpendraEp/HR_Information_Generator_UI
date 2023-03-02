import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard-selecter',
  templateUrl: './dashboard-selecter.component.html',
  styleUrls: ['./dashboard-selecter.component.css']
})
export class DashboardSelecterComponent {
  constructor(private user:UserService){}
   //<!-- @ kirti ( 28/02/23 ) get year value -->

  years = [2021,2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
  
  
  selectyear(event: any){
    console.warn(event.target.value)
   
   
  }
 

  }

  


