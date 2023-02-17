import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {
 
  userlogin(item:NgForm){
    
    console.log(item);
    // item.reset().
   
   
  }
 
  

}
