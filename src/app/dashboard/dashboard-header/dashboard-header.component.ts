import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/service/dialog.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent {
  constructor(private routes: Router, private dialogService: DialogService) { }
  // <!-- @ kirti soni ( 6/03/23 )  fun for navbar open and close-->
  upload() {
    this.routes.navigate(['/upload-file'])
  }
  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
 
  logout() {
    const message = 'Are you sure you want to logout?';
    const title = 'Logout Confirmation';
    this.dialogService.open(message, title).subscribe(result => {
      if (result) {
        localStorage.removeItem('token');
        this.routes.navigate([''])
      }
     
    });
    
  }

}
