import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
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

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.admin_Details().subscribe(data => {
      this.admindata = data
      this.admindata[0].DOB = this.admindata[0].DOB.slice(0, 10);
      console.log(this.admindata)
    }, error => {
      console.log(error.error.message)
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
    console.log(this.admindata[0])
    this.userService.updateData(this.admindata).subscribe(data => {
      if (data.status) {
        console.log(data)
        this.isEditMode = false;
      }
      else {
        this.updateLoader = false;
      }
    }, err => {
      this.updateLoader = false;
    })

  }


}
