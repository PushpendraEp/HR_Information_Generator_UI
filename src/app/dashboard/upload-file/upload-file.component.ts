import { Component, ViewChild } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { UploadService } from 'src/app/service/upload.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  uploadLoader: boolean = false;
  // private uploadSubject = new Subject();
  /* @ kirti soni ( 7/03/23 ) upload file data in database from api*/
  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  constructor(private uploadService: UploadService, private toastr: ToastrService) { }
  file: any;
  months: any;
  years: any;
  formData: any;
  selectfile(event: any) {
    this.uploadLoader = false;
    this.file = event.target.files[0];

  }
  

  userdata(userForm: any) {
    const file = this.file;
   
    // this.uploadSubject.next(file);
    // this.uploadSubject.pipe(debounceTime(200)).subscribe(() => {
      this.uploadLoader = true;
      setTimeout(() => {
    this.uploadService.uploadfile(file,userForm.value.months,userForm.value.years).subscribe((result: any) => {
       if (result.status) {
      this.uploadLoader=false;
      console.log('result', result);
      this.toastr.success('File uploaded successfully', 'Success', {
        positionClass: 'toast-bottom-right',
        progressBar: true,
        timeOut: 3000,
        closeButton: false,
        tapToDismiss: false,
        extendedTimeOut: 1000,
        enableHtml: true,
        toastClass: 'bg-success'
      });
    
    }
    
      
    });
  }, 500);
  }
 

}

