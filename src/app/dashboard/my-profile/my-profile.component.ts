import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  //  @ kirti soni ( 13/03/23 )  get admindetails from api basedd on token 
  admindata: any;
  isEditing: boolean = false;
  updateLoader: boolean = false;

  constructor(private userService: UserService, public toastr: ToastrService) { }

  ngOnInit() {
    this.userService.admin_Details().pipe(
      catchError(error => {
        console.log(error.error.message);
        return of(null);
      })
    )
    .subscribe((data:any) => {
      if(data && data.status){    
        this.admindata = data.results;
        this.admindata[0].DOB = this.admindata[0].DOB.slice(0, 10);
      }
    })

  }
  //  @ kirti soni ( 14/03/23 )  create functionality on edit and update button
  isEditMode = false;
  EditMode() {
    this.isEditMode = !this.isEditMode;
  }


  //  @ kirti soni ( 14/03/23 )  update admindetails
  update() {
    this.updateLoader = true;
    // console.log(this.admindata[0])
    this.userService.updateData(this.admindata).pipe(
      catchError(error => {
        this.updateLoader = false;
        this.toastr.error('User Details Not updateded', 'Failed', {
          timeOut: 3000,
          progressBar: true
        });
        console.log(error.error.message);
        return of(null);
      })
    ).subscribe(data => {
      if (data && data.status) {
        // console.log(data)
        this.updateLoader = false;
        this.isEditMode = false;
       
          this.toastr.success('Update Successful!!!', 'Success', {
            timeOut: 3000,
            progressBar: true,
          });
      }
      else {
        this.updateLoader = false;
      }
    })

  }
}