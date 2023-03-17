import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Router, Routes } from '@angular/router';
import { LoaderService } from 'src/app/service/loader.service';
import { debounceTime } from 'rxjs';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {
  loginError:String| undefined;
  loginLoader:boolean=false;
  constructor(private userService:UserService ,private route:Router, ) {}
  ngOnInit(){
    
    if(this.userService.IsLoggedIn()){
      this.route.navigate(['dashboard'])
    }
    
  }
 
 // <!-- @ kirti ( 17/02/23 ) Template Driven login form and reset value after submission--->
 //<!-- @ Ravi ( 28/02/23 ) login api integration -->
 
 userLogin(data:any){
  console.log(data)
  this.loginLoader=true;
 
  // setTimeout(() => {
  this.userService.login(data).subscribe((result:any)=>{
    if(result.status){
     
      localStorage.setItem("token", result.token)
      this.route.navigate(['/dashboard'])
      // this.toastr.success('Login successfully', 'Success');
      this.loginLoader=false;
    } 
  })
// },500);
 
} 
}