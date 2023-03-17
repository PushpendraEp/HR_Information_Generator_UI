import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  private loadingSubject:Subject<boolean> = new Subject<boolean>();
  lodingAction$: Observable<boolean> = this.loadingSubject.asObservable();

  showLoader(){
    this.loadingSubject.next(true);
  }

  hideLoader(){
    this.loadingSubject.next(false);
  }
}
