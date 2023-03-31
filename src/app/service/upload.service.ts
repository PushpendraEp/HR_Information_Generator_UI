import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environments';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  uploadMessage:string | undefined;
  constructor(private http: HttpClient, public toastr: ToastrService, private dialogService: DialogService) { }
  //<!-- @ Ravi ( 02/03/23 ) upload file api integration -->
  upload(formData: any, callback: any) {
    this.http
      .post(`${environment.URL}/uploadFile`, formData)
      .subscribe((result: any) => {
        if (result.status) {
          // console.log(result.message);
          // this.toastr.success(`${result.message}`, 'Success', {
          //   timeOut: 3000,
          //   progressBar: true,
          // });
          
          // this.dialogService.open(message, title).subscribe((dialogResult)=>{
            // if(dialogResult){
            this.dialogService.showMessage(`Success: ${result.message}`,true);
            // }
            callback(false)
          // })
         
          
        }
      },
        err => {
          callback(true)
          // console.log(err.error.message)
          this.uploadMessage=err.error.message;
          // this.toastr.error(`${this.uploadMessage}`, 'Failed', {
          //   timeOut: 3000,
          //   progressBar: true
            
          // });
          this.dialogService.showMessage(`Failed: ${this.uploadMessage}`,false);
        });
  }
}
