import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { DashboardSelecterComponent } from './dashboard-selecter/dashboard-selecter.component';


@NgModule({
  declarations: [
    DashboardMainComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent,
    DashboardSelecterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
