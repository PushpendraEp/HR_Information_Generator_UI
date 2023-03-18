import { Component, ElementRef, ViewChild } from '@angular/core';
import { UploadService } from 'src/app/service/upload.service';
import{ToastComponent} from '../toast/toast.component';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
  providers: [ToastComponent]
})
export class UploadFileComponent {
  // @ViewChild('toast') toast: ElementRef | undefine
  // @ViewChild('app-toast', { static: false }) toastComponent!: ToastComponent;
  // @ViewChild('toast', { static: true }) toast!: ToastComponent;
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;
  // @ViewChild(ToastComponent, { static: false })
  // toastComponent!: ToastComponent;
  // @ViewChild(ToastComponent, { static: false })
  // toastComponent!: ToastComponent;
  uploadLoader: boolean = false;
  /* @ kirti soni ( 7/03/23 ) upload file data in database from api*/
  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  constructor(private uploadService: UploadService) { }
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
    console.warn(this.file);
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
    console.log(this.years);
    console.log(this.months);
    console.log(this.monthyear_array)
    formData.append('selectedMonth', this.months);
    formData.append('selectedYear', this.years);
    this.uploadService.upload(formData, (err: boolean) => {
      if (err) {
        this.uploadLoader = false;
      }
      else {
        this.uploadLoader = false;
        setTimeout(() => {
          this.toastComponent.showToast();
        }, 0);
      }
     
      // if (this.toastComponent) {
      //   this.toastComponent.showToast();
      // }
    });
    
  }
  // showToast() {
  //   if (this.toast && this.toast.nativeElement) {
  //     const toast = this.toast.nativeElement;
  //     if (!toast.classList.contains('show')) {
  //       toast.classList.add('show');
  //       setTimeout(() => {
  //         toast.classList.remove('show');
  //       }, 3000);
  //     }
  //   }
  // }


}