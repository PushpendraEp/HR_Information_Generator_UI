import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../gaurds/auth.guard';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardMainComponent,
    children: [{path:'', redirectTo:'upload-file', pathMatch:'full'},{ path: 'upload-file', component: UploadFileComponent },
    { path: 'emp-details', component: EmpDetailsComponent }, {path: 'my-profile', component: MyProfileComponent}],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }







