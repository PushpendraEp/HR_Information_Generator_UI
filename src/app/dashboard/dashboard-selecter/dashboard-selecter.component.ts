import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard-selecter',
  templateUrl: './dashboard-selecter.component.html',
  styleUrls: ['./dashboard-selecter.component.css']
})
export class DashboardSelecterComponent {
  constructor(private user:UserService ){}
  years = [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

  data:any[] | undefined;
  selectedYear: any
tablelist:any[] |undefined
}