import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';  

const baseUrl = environment


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private route : Router) { }

  run(){
    // return this.http.get(baseUrl);
  }
  login(object:any){
    return this.http.post(baseUrl.loginUrl, object);
  }
  register(object:any){
    return this.http.post(baseUrl.registerUrl, object);
  }
}
