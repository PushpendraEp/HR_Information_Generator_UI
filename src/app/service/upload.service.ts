import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})
export class UploadService {
  
  
  constructor(private http: HttpClient ) {}
  //<!-- @ Ravi ( 02/03/23 ) upload file api integration -->
  // private uploadFileSubject = new Subject<any>();
  public uploadfile(file: File,selectedMonth:string,selectedYear:string) {
   
    let formParams = new FormData();
    formParams.append('file', file);
    formParams.append('selectedMonth', selectedMonth);
    formParams.append('selectedYear', selectedYear);
    console.log(file);
    // this.uploadFileSubject.next(formParams);
    
    return this.http.post('http://localhost:3000/uploadFile', formParams);
  }
}
