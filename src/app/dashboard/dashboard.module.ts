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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { MyProfileComponent } from './my-profile/my-profile.component';
// import { PipiPipe } from '../pipi.pipe';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { ToastComponent } from './toast/toast.component';


@NgModule({
  declarations: [
    DashboardMainComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent,
    DashboardSelecterComponent,
    EmpDetailsComponent,
    UploadFileComponent,
    MyProfileComponent,
    ToastComponent

   
  ],
  entryComponents: [ToastComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,NgxPaginationModule,Ng2FilterPipeModule
  ]
})
export class DashboardModule { }
