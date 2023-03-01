import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FormsModule} from '@angular/forms'
// import { BrowserModule } from '@angular/platform-browser';
import { HomeRoutingModule } from './home-routing.module';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginSignupComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    HttpClientModule
    // BrowserModule
  ],
  providers: [],
})
export class HomeModule { }
