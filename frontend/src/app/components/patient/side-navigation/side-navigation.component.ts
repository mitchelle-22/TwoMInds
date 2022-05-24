import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  email: string = "";
 
  showSidebar: boolean = false;

  constructor(private router: Router, private activatedRoute:ActivatedRoute,private storage : LocalStorageService) { 
    this.email =this.router.getCurrentNavigation()?.extras.state?.['email'];
  }

  ngOnInit(): void {
   
  }

  logout():void {
   localStorage.removeItem("patient");
   this.router.navigateByUrl("\signin");
  }

  onShowSidebar ():void {
    this.showSidebar = !this.showSidebar
  }
  
}
