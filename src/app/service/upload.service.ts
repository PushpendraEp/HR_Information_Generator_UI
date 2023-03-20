import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private http: HttpClient) { }
  //<!-- @ Ravi ( 02/03/23 ) upload file api integration -->
  upload(formData: any, callback: any) {
    this.http
      .post(`${environment.URL}/uploadFile`, formData)
      .subscribe((result: any) => {
        if (result.status) {
          // console.log(formData)
          // console.log('result', result);
          callback(false)
        }
      },
        err => {
          callback(true)
          console.log(err.error.message)
        });
  }
}
