import { Component } from '@angular/core';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
   /* @ kirti soni ( 7/03/23 ) upload file data in database from api*/
  month=['January' ,'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December']
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
