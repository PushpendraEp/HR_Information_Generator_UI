import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class DialogBoxComponent {
  // value: string;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string, title?: string },
    private snackBar: MatSnackBar
  ) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    const data:string='';
    this.dialogRef.close(true);
    // this.showSnackBar(data);
  }

  // showSnackBar(message: string) {
  //   this.snackBar.open(message, 'Close', {
  //     duration: 3000,
  //     horizontalPosition: 'center',
  //     verticalPosition: 'bottom',
  //   });
  // }
  
}
