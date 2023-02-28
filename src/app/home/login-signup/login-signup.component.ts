import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/service/user.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {
  constructor(private userService:UserService ,private route:Router) {}
 
 // <!-- @ kirti ( 17/02/23 ) Template Driven login form and reset value after submission--->
 //<!-- @ Ravi ( 28/02/23 ) login api integration -->
 userLogin(data:any){
  console.log(data)
  this.userService.login(data)
  this.route.navigate(['/dashboard'])
 }
 
} 