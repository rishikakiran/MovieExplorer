import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user';

import { AuthServiceService } from '../../auth-service.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser:User;
  constructor(private service:AuthServiceService,private router:Router) { }

  ngOnInit() {
    this.newUser=new User();
  }
  loginUser(){
    this.service.loginUser(this.newUser).subscribe(
      (data)=>{
        if(data['token'])
        {
          this.service.setToken(data['token']);
          this.router.navigate(['/movies/popular']);
        }
      }
    );
  }
}
