import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AssessmentsService } from 'src/app/services/assessments.service';
import { DailyassessmentsService } from 'src/app/services/dailyassessments.service';
import { ResultsService } from 'src/app/services/results.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-assessment-results',
  templateUrl: './add-assessment-results.component.html',
  styleUrls: ['./add-assessment-results.component.css'],
})
export class AddAssessmentResultsComponent implements OnInit {
  //`user id has to be passwed
  user = 0;

  assessments: any;

  isLoading: boolean = false;

  answer = [];
  question = [
    {
      Question: [],
    },
  ];

  resultsForm = this.formbuilder.group({
    status: [''],
    feedback: [''],
    rate: [''],
  });

  constructor(
    private dialyAssessment: DailyassessmentsService,
    private assessmentsService: AssessmentsService,
    private formbuilder: FormBuilder,
    private result : ResultsService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    
    this.getAllTheQuestion();
    this.activatedRoute.params.subscribe(params => {
      this.user = params['id'];
    });
    this.getUserDailyAssessment();
   
  }

  getUserDailyAssessment() {
    this.isLoading = true;
    //user Id has to be passed
    this.dialyAssessment.getDailyAssessmentByUserId(this.user).subscribe({
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

  onSubmit(assessment: any) {
    console.log(assessment);

    let results = {
      assessmentTaken: assessment.id,
      status: this.resultsForm.value.status,
      feedback: this.resultsForm.value.feedback,
      rate: this.resultsForm.value.rate,
      Answers: assessment.answer,
      active: 1,
      //  AssessmentFK: 0,
      PatientResultFK:this.user
    };
    this.addResult(results);

    console.log(results);
  }

  addResult(results: any) {
    this.isLoading = true;
    this.result.addResult(results).subscribe({
      next: (res) => {
        console.log(res);
        this.alert('Result added successfully', '');
        this.resultsForm.reset();
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error.error);
        this.alert('*Internal Server error', '#FF0000');
        this.resultsForm.reset();
        this.isLoading = false;
      },
    });
  }

  alert(error: any, color: string) {
    Swal.fire({
      text: error,
      width: 300,
      color: color,
      showConfirmButton: false,
      timer: 2000,
    });
  }

  back() {
    this.location.back();
  }

  
}
