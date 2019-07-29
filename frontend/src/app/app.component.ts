import { Component } from '@angular/core';
import { AuthServiceService } from './modules/authentication/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-cruiser-capsule-frontend';
  constructor(private auth:AuthServiceService,
  private router:Router){

  }

  logout(){
    this.auth.removeToken();
    this.router.navigate(['/login']);
  }
}
