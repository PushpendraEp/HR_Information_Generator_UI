import { Component } from '@angular/core';

import { NgForm } from '@angular/forms'

import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/service/user.service';
import { Router, Routes } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {
  loginLoader: boolean = false;
  decodetoken: any;
  loginError: String | undefined;
  constructor(private userService: UserService, private route: Router) { }
  ngOnInit() {
    if (this.userService.IsLoggedIn()) {
      this.route.navigate(['dashboard'])
    }
  }

  // <!-- @ kirti ( 17/02/23 ) Template Driven login form and reset value after submission--->
  //<!-- @ Ravi ( 28/02/23 ) login api integration -->
  //<!-- @ kirti ( 28/02/23 ) login api integration and show error message-->
  userLogin(data: any) {
    this.loginLoader = true;
    console.log(data)
    this.userService.login(data).subscribe((result: any) => {
      if (result.status) {
        this.loginLoader = false;
        localStorage.setItem("token", result.token)
        console.log(result.token)
        this.route.navigate(['/dashboard'])
      }
      else {
        console.log('Error in login --->>>>');
        this.loginLoader = false;
      }
    },
      (err: any) => {
        this.loginError = err.error.message;
        this.loginLoader = false;
      })


  }
}