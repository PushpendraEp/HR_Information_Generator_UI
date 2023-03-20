import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent {
  constructor(private routes:Router){}
  // <!-- @ kirti soni ( 6/03/23 )  fun for navbar open and close-->
  upload(){
    this.routes.navigate(['/upload-file'])
  }
  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  logout(){
    localStorage.removeItem('token');
    this.routes.navigate([''])
  }
}
