import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FormsModule} from '@angular/forms'
// import { BrowserModule } from '@angular/platform-browser';
import { HomeRoutingModule } from './home-routing.module';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HttpClientModule } from '@angular/common/http';
// import { ToastrModule, ToastrService } from 'ngx-toastr';




@NgModule({
  declarations: [
    LoginSignupComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    HttpClientModule,
    // ToastrModule.forRoot({
    //   timeOut: 10000,
    //   positionClass: 'toast-bottom-right',
    //   preventDuplicates: true,
    //   toastClass: 'ngx-toastr bg-success'
    // })
    // BrowserModule
  ],
  providers: [],
})
export class HomeModule { }
