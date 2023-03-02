// <!-- @ kirti soni ( 24/02/23 )  get data of file-->
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css'],
})
export class DashboardMainComponent {
  constructor(private uploadService: UploadService) {}
  file: any;
  months:any;
  years: any;
  formData: any;
  selectfile(event: any) {
    this.file = event.target.files[0];
    console.warn(this.file);
  }
  userdata(userForm: any) {
    let formData = new FormData();
    formData.append('file', this.file);
    formData.append('selectedMonth', userForm.value.months);
    formData.append('selectedYear', userForm.value.years);
    console.log(formData);
    this.uploadService.upload(formData);
  }
}
