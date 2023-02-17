// <!-- @ kirti ( 17/02/23 ) console form value and reset from value here--->
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {

 
  userlogin(item:NgForm){
    
    console.log(item.value);
    item.reset()
   
   
  }
 
  

}
