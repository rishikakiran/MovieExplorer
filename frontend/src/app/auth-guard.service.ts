import { Injectable } from '@angular/core';
import { CanActivate, Route, Router } from '@angular/router';
import { AuthServiceService } from './modules/authentication/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private route:Router,
  private authService:AuthServiceService) { }

  canActivate(){
    if(!this.authService.isTokenExpired()){
      return true;
    }
    this.route.navigate(['/login']);
    return false;
  }
}
