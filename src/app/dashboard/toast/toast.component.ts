import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  // @ViewChild('toast', { static: false })
  // toast!: ElementRef;

  // showToast() {
  //   const toast = this.toast.nativeElement;
  //   toast.classList.add('show');
  //   setTimeout(() => {
  //     toast.classList.remove('show');
  //   }, 3000);
  // }
  // @ViewChild('toast', { static: false }) toast!: ElementRef ;
  @ViewChild('app-toast') toast!: ElementRef;

  constructor() { }

  ngOnInit() { }
  // ngAfterViewInit() {
  //   console.log(this.toast.nativeElement);
  // }


  showToast() {
    if (this.toast && this.toast.nativeElement) {
      const toast = this.toast.nativeElement;
      if (!toast.classList.contains('show')) {
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 3000);
      }
    }
  }
}
