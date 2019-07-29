import { Injectable } from '@angular/core';
import { HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent } from '@angular/common/http';
import { AuthServiceService } from '../authentication/auth-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authService:AuthServiceService) { }

  intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    //console.log("in intercept");

    request= request.clone({
      setHeaders:{
        Authorization :`Bearer ${this.authService.getToken()}`
      }
    });
    return next.handle(request);
  }
}
