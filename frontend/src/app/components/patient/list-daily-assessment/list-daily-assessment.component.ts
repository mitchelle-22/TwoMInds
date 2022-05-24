import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AssessmentListService } from 'src/app/services/assessment-list.service';

@Component({
  selector: 'app-list-daily-assessment',
  templateUrl: './list-daily-assessment.component.html',
  styleUrls: ['./list-daily-assessment.component.css']
})
export class ListDailyAssessmentComponent implements OnInit {

  list : any;

  constructor(private location : Location) { }

  ngOnInit(): void {
  }

  back() {
    this.location.back();
  }

}
