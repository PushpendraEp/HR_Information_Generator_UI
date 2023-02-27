// <!-- @ kirti soni ( 24/02/23 )  get data of file-->
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent {

  selectfile(event: any){
    console.warn(event.target.files)

  }
  userdata(item:NgForm){
   
    console.warn(item)

  }
}
