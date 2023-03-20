import { Component } from '@angular/core';
import { UploadService } from 'src/app/service/upload.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
})
export class UploadFileComponent {
  
  uploadLoader: boolean = false;
  /* @ kirti soni ( 7/03/23 ) upload file data in database from api*/
  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  constructor(private uploadService: UploadService, public toastr: ToastrService) { }
  monthyear_array: any
  selectedMonthNumber: any
  selectMonths: any
  file: any;
  months: string | any;
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
    let monthyear = userForm.value.months
    this.monthyear_array = monthyear.split('-')
    this.years = this.monthyear_array[0]
    this.months = this.monthyear_array[1]
    formData.append('selectedMonth', this.months);
    formData.append('selectedYear', this.years);
    this.uploadService.upload(formData, (err: boolean) => {
      if (err) {
        this.uploadLoader = false;
          this.toastr.error('Error In Uploading File', 'Failed', {
            timeOut: 3000,
            progressBar: true
            
          });
      }
      else {
        this.uploadLoader = false;
          this.toastr.success('File Upload Successful!!!', 'Success', {
            timeOut: 3000,
            progressBar: true,
          });
        userForm.reset();
      }
    });

  }
}