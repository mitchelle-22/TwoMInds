import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  searchInput:any;
  //searches =[]

  users: any;

  name = localStorage.getItem("admin-username");
  
  showSidebar: boolean = true;

  isLoading: boolean = false;

  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    this.getUsers();
    // this.userService.getallusers().subscribe(res =>
    //   this.users = res
    // )

  }

  getUsers(){
    this.isLoading = true;
    this.userService.getallusers().subscribe({
      next: (res:any) => {
      this.users = res;
      this.isLoading = false;
      console.log(this.users)
      },
      error: (error) => {
        this.isLoading = false;
      }
    })
  }

  onShowSidebar ():void {
    this.showSidebar = !this.showSidebar
  }
}
