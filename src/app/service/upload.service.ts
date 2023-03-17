import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private http: HttpClient) { }
  //<!-- @ Ravi ( 02/03/23 ) upload file api integration -->
  upload(formData: any, callback: any) {
    this.http
      .post('http://localhost:3000/uploadFile', formData)
      .subscribe((result: any) => {
        if (result.status) {
          console.log(formData)
          console.log('result', result);
          callback(false)
        }
      },
        err => {
          callback(true)
        });
  }
}
