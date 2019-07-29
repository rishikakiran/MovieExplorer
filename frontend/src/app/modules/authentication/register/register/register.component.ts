import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { AuthServiceService } from '../../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser :User;
  constructor(private authService: AuthServiceService, private router:Router) { 
    this.newUser=new User();
  }

  ngOnInit() {
  }

  registerUser(){
    console.log("Register User " + this.newUser.userId+" "+this.newUser.password);
    this.authService.registerUser(this.newUser).subscribe(
      (res)=>{
        console.log("user data "+res);
      }
    );
    this.router.navigate(['/login']);
  }

  clearInput(){

  }

}
