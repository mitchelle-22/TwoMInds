import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DailyassessmentsService } from 'src/app/services/dailyassessments.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router, private assess : DailyassessmentsService) { }

  ngOnInit(): void {
  }


  toInfo(){
    this.router.navigate(['/info']);
  }
}
