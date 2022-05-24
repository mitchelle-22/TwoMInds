import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const baseUrl = environment

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http:HttpClient, private route : Router) { }

  getUserByUUId(Id:string){
    return this.http.get(baseUrl.getUsersByUUID+ Id);
  }
  getUserById(id:string){
    return this.http.get(baseUrl.getUsersById+ id);
  }
  updateUser(obj:any){
    return this.http.patch(baseUrl.getUsersById+ obj.id,obj);
  }
  deleteUser(obj:string){
    return this.http.delete(baseUrl.getUsersById+ obj);
  }
  
  getallusers(){
    return this.http.get(baseUrl.getAllUsers);
  }
}
