import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showSidebar: boolean = true;
  user = JSON.parse(localStorage.getItem('patient') as any);

  firstName:any;
    password:any;
    phone:any;
    email: string = "";
    name:string = "";
  
  constructor(private location: Location,private router: Router,private activatedRoute:ActivatedRoute,private storage : LocalStorageService, private userService: UsersService) { 
   this.name =this.router.getCurrentNavigation()?.extras.state?.['email'];
  }

  ngOnInit(): void {
    // this.userService.getUserById(this.user.id).subscribe(
    //  (response) => console.log(response),
    //  (error) => console.error(),
    //  () => console.log('done getting user')
     
    // )
    let user =  JSON.parse(localStorage.getItem('patient') as any);;
console.log(user.email);

  }
  onShowSidebar ():void {
    this.showSidebar = !this.showSidebar
  }
  updateForm(){

  }
  back() {
    this.location.back();
  }

  
}



