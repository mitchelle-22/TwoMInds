import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { AssessmentsService } from 'src/app/services/assessments.service';
import { DailyassessmentsService } from 'src/app/services/dailyassessments.service';

@Component({
  selector: 'app-therapist-assessment-review',
  templateUrl: './therapist-assessment-review.component.html',
  styleUrls: ['./therapist-assessment-review.component.css'],
})
export class TherapistAssessmentReviewComponent implements OnInit {
  name =  localStorage.getItem("admin-username");
  users: any;
  showSidebar: boolean = true;
  isLoading: boolean = false;

  constructor(
    private usersservice: UsersService,
    private router: Router,
    private assessmentsservice: AssessmentsService,
    private dailyassessmentsservice: DailyassessmentsService
  ) {

  }

  assessment: any;

  numQ = 4;

  answer = [];
  question = [
    {
      Question: [],
    },
  ];

  user = JSON.parse(localStorage.getItem('patient') as any);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.isLoading = true;
    this.usersservice.getallusers().subscribe({
      next: (res: any) => {
        this.users = res;
        this.isLoading = false;
        console.log(this.users);
      },
      error: (error) => {
        this.isLoading = false;
      },
    });
  }

  onShowSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }



  onView(id: any): void {
    this.dailyassessmentsservice.getDailyAssessmentByUserId(id).subscribe({
      next: (res: any) => {
        this.assessment = res;
        console.log(res.length);
        this.answer = this.assessment.answer;
        console.log(this.assessment);
      },
      error: (error) => console.log(error),
    });

    this.assessmentsservice.getAllAssessments().subscribe({
      next: (res: any) => {
        // this.assessment = res[res.length-1];
        this.question = res;
        console.log('question', this.question);
      },
      error: (error) => console.log(error),
    });
  }

  searchText = '';
  characters = [];
}
