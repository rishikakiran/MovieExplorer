import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

import * as jwt_decode from 'jwt-decode';

export const TOKEN_NAME:string="jwt_token";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  springEndPoint:string;

  token:string;
  constructor(private http:HttpClient) { 
    this.springEndPoint="http://localhost:2213/api/v1/userservice";
  }

  registerUser(newUser:User){
    const registerUrl=this.springEndPoint+"/register";
    // console.log("in service newuser "+newUser);
    // console.log(registerUrl);
    return this.http.post(registerUrl,newUser,{responseType: 'text'});
  }

  loginUser(newUser:User){
    const loginUrl=this.springEndPoint+"/login";
    // console.log("in login service newuser "+newUser);
    return this.http.post(loginUrl,newUser);
  }

  setToken(token:string){
    return localStorage.setItem(TOKEN_NAME,token);
  }

  getToken(){
    return localStorage.getItem(TOKEN_NAME);
  }
  removeToken(){
    return localStorage.removeItem(TOKEN_NAME);
  }

  getTokenExpirationDate(token : string):Date{
    const decoded= jwt_decode(token);
    if(decoded.exp===undefined)
    return null;
    const date=new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token ?: string) :boolean{
    if(!token)
    token=this.getToken();
   // console.log(!token+" "+token);

    if(!token)
    return true;

    const date=this.getTokenExpirationDate(token);
  //  console.log(date);
    if(date===undefined || date===null)
    {
      return false;
    }

  //  console.log(!(date.valueOf() > new Date().valueOf()));
    return !(date.valueOf() > new Date().valueOf());
  }
}
