import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  showSidebar: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  onShowSidebar ():void {
    this.showSidebar = !this.showSidebar
  }

  assessment(){
    console.log("fafs");

  }
}
