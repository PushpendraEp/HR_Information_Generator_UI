import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { DashboardSelecterComponent } from './dashboard-selecter/dashboard-selecter.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    DashboardMainComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent,
    DashboardSelecterComponent,
    EmpDetailsComponent,
    UploadFileComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      toastClass: 'ngx-toastr bg-success'
    })
    
  ],
  providers: [ToastrService],
  exports: [DashboardMainComponent],
})
export class DashboardModule { }
