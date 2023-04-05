import { Component } from '@angular/core';
import { UploadService } from 'src/app/service/upload.service';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'src/app/service/dialog.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
})
export class UploadFileComponent {
  
  uploadLoader: boolean = false;
  /* @ kirti soni ( 7/03/23 ) upload file data in database from api*/
  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  constructor(private uploadService: UploadService, public toastr: ToastrService, private dialogService: DialogService) { }
  monthyear_array: any
  selectedMonthNumber: any
  selectMonths: any
  file: any;
  months: string ="";
  years: string | any;
  formData: any;

  /* @ kirti soni get data of selection box*/
  selectfile(event: any) {
    this.file = event.target.files[0];
    // console.warn(this.file);
  }
  /* @ kirti soni ( 10/03/23 ) split monthyear field and upload file based on month and year  */
  userdata(userForm: any) {
    this.uploadLoader = true;
    let formData = new FormData();
    formData.append('file', this.file);
    if (userForm && userForm.value && userForm.value.hasOwnProperty('months')) {
      let monthyear = userForm.value.months
      console.log('monthyear:', monthyear);
    this.monthyear_array = monthyear.split('-')
    this.years = this.monthyear_array[0]
    this.months = this.monthyear_array[1]
    formData.append('selectedMonth', this.months);
    formData.append('selectedYear', this.years);
    console.log(this.months);
    console.log(this.years);
    }
  
    this.uploadService.upload(formData, (err: boolean) => {
      if (err) {
        this.uploadLoader = false;
      }
      else {
        this.uploadLoader = false;
      }
      userForm.reset()
    });
  } 
}