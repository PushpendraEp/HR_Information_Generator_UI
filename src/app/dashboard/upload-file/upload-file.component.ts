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
  monthyear_array:any
  selectedMonthNumber:any
  selectMonths:any
  file: any;
  months:string |any;
  years: string| any;
  formData: any;
  selectfile(event: any) {
    this.file = event.target.files[0];
    console.warn(this.file);
  }
 
  userdata(userForm: any) {
    let formData = new FormData();
    formData.append('file', this.file);
    let monthyear=userForm.value.months
     this.monthyear_array= monthyear.split('-')
    this.years= this.monthyear_array[0]
    this.months=this.monthyear_array[1]
    console.log(this.years);
    console.log(this.months);
    console.log(this.monthyear_array)
    formData.append('selectedMonth', this.months);
    formData.append('selectedYear', this.years);
 
    this.uploadService.upload(formData);
    
  }
  
 
  
}