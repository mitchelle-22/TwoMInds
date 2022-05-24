import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from 'src/app/services/assessments.service';
import { DailyassessmentsService } from 'src/app/services/dailyassessments.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-assessment-history',
  templateUrl: './assessment-history.component.html',
  styleUrls: ['./assessment-history.component.css'],
})
export class AssessmentHistoryComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('patient') as any);

  assessments: any;

  isLoading: boolean = false;

  answer = [];
  question = [
    {
      Question: [],
    },
  ];

  constructor(
    private dialyAssessment: DailyassessmentsService,
    private assessmentsService: AssessmentsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUserDailyAssessment();

    this.getAllTheQuestion();
  }

  getUserDailyAssessment() {
    this.isLoading = true;
    this.dialyAssessment.getDailyAssessmentByUserId(this.user.id).subscribe({
      next: (res: any) => {
        this.assessments = res;
        console.log(res);
        this.answer = this.assessments.answer;
        this.isLoading = false;
      },
      error: (error) => (this.isLoading = false),
    });
  }

  getAllTheQuestion() {
    this.isLoading = true;
    this.assessmentsService.getAllAssessments().subscribe({
      next: (res: any) => {
        this.question = res;
        console.log('question', this.question);
        this.isLoading = false;
      },
      error: (error) => (this.isLoading = false),
    });
  }

  back() {
    this.location.back();
  }

}
