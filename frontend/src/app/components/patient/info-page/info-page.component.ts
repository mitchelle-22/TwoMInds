import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  tologin(){
    this.router.navigate(['/signin']);
  }
}
