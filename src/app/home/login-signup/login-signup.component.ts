import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {

 // <!-- @ kirti ( 17/02/23 ) Template Driven login form and reset value after submission--->
  userlogin(item:NgForm){
    console.log(item.value);
    item.reset()
   }

}
