import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common'
import { DailyassessmentsService } from 'src/app/services/dailyassessments.service';
import { AssessmentsService } from 'src/app/services/assessments.service';
import { Router } from '@angular/router';
import { timeStamp } from 'console';

@Component({
  selector: 'app-assessment-review',
  templateUrl: './assessment-review.component.html',
  styleUrls: ['./assessment-review.component.css']
})
export class AssessmentReviewComponent implements OnInit {
  listFiltered: any;
  list: any;

  isLoading: boolean = false;
  
  constructor(
    private dailyAss: DailyassessmentsService,
    private assessmentService: AssessmentsService,
    private router:Router
  ) { }


  assessment: any;

  numQ = 4;

  //mmust have a loader
  answer = [];
  question = [];

  user = JSON.parse(localStorage.getItem('patient') as any);

  ngOnInit(): void {
    this.isLoading = true;
    this.dailyAss.getDailyAssessmentByUserId(this.user.id).subscribe({
      next: (res: any) => {
        this.assessment = res[res.length-1];
        console.log(res.length);
        this.answer = this.assessment.answer;
        console.log(this.assessment);
        this.isLoading = false;
      },
      error: (error) => this.isLoading = false
    })

    this.assessmentService.getAllAssessments().subscribe({
      next: (res: any) => {
       // this.assessment = res[res.length-1];
       this.question = res[res.length-1].Question;
        this.isLoading = false;


      },
      error: (error) => this.isLoading = false
    })

  }
  btnNext(){
    this.router.navigateByUrl('/results')
  }


}
