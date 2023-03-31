import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { DialogBoxComponent } from '../common-module/dialog-box/dialog-box.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) { }

  open(message: string, title?: string): Observable<boolean> {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      data: { message, title },
      disableClose: false,
      maxWidth: '30vw',
      maxHeight: '40vh',
      height: '20%',
      width: '50%',
      panelClass: 'full-with-dialog',
    });

    return dialogRef.afterClosed();
  }

 

  showMessage(message: string, isSuccess: boolean): void {
     const panelClass = isSuccess ? 'success-snackbar' : 'error-snackbar';
  
  this.snackBar.open(message, 'Close', {
    panelClass: [panelClass],
    duration: 3000,
     horizontalPosition: 'right',
    verticalPosition: 'top',
  });
  
  }
  
}
