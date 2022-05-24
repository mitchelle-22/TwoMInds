import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-journal-list-user',
  templateUrl: './journal-list-user.component.html',
  styleUrls: ['./journal-list-user.component.css']
})
export class JournalListUserComponent implements OnInit {

  name =  localStorage.getItem("admin-username");
  
  showSidebar: boolean = true;
  users:any;
  
  isLoading: boolean = false;

  searchedKeyword:any;
  filterResultDataSet =[this.getUsers()];
 constructor(private router:Router,private user : UsersService, private formbuilder: FormBuilder, private route : Router) {
  this.getUsers();
}

ngOnInit(): void {
}
getUsers(){
  this.isLoading = true;
  this.user.getallusers().subscribe((res:any) => {
    this.users = res;
    this.isLoading = false;
    console.log(this.users)
  },(error) => {
    this.isLoading = false;
  })
}
onShowSidebar ():void {
  this.showSidebar = !this.showSidebar
}
next(id:any){
  this.route.navigateByUrl('details',  {state: {id: id,name:this.name}})
}

}
