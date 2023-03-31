import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    DialogBoxComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    DialogBoxComponent,
    PageNotFoundComponent
  ]
})
export class CommonModuleModule { }
