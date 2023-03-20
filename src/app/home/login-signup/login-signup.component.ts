import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router, Routes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {
  loginLoader: boolean = false;
  decodetoken: any;
  loginError: String | undefined;
  constructor(private userService: UserService, private route: Router, public toastr: ToastrService) { }
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
    // console.log(data)
    this.userService.login(data).pipe(
      catchError(error => {
        this.loginError = error.error.message;
        this.loginLoader = false;
          this.toastr.error('Login Failed!!!', 'Falied', {
            timeOut: 3000,
            progressBar: true, 
          });
        return of(null);
      })
    ).subscribe((result: any) => {
      if (result && result.status) {
        this.loginLoader = false;
        localStorage.setItem("token", result.token)
        // console.log(result.token)
        this.route.navigate(['/dashboard'])
       
      }
      else {
        console.log('Error in login --->>>>');
        this.loginLoader = false;
      }
    })
  }
}