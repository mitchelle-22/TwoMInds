import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DailyassessmentsService } from 'src/app/services/dailyassessments.service';
// location
import { Location } from '@angular/common';

@Component({
  selector: 'app-more-about-question',
  templateUrl: './more-about-question.component.html',
  styleUrls: ['./more-about-question.component.css'],
})
export class MoreAboutQuestionComponent implements OnInit {
  questionNumber = 0;
  answer: any = [];
  level = 0;

  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private dailyAss: DailyassessmentsService,
    private location: Location
  ) {
    this.questionNumber =
      this.router.getCurrentNavigation()?.extras.state?.['questionNumber'];
    this.answer = this.router.getCurrentNavigation()?.extras.state?.['answer'];
    this.level = this.router.getCurrentNavigation()?.extras.state?.['level'];
    console.log(this.questionNumber);
    console.log('Answer Array', this.answer);
  }

  ngOnInit(): void {}

  ratingForm = this.formbuilder.group({
    contact: ['']
  });

  nextQuestion() {
    console.log(this.questionNumber);
    //once reaach the last question it take you to assessemnt review
    console.log("Rate:  ",this.ratingForm.value.contact);
    let myanswer = this.answer[this.questionNumber-1] + ", " + this.ratingForm.value.contact;
    console.log("Have been submited ",myanswer);

    this.answer[this.questionNumber-1] = myanswer;

    if (this.questionNumber == 4) {
      let user = JSON.parse(localStorage.getItem('patient') as any);

      const dailyAssessment = {
        // id: 1,
        answer: this.answer,
        date: new Date(),
        AssessmentFK: 7,
        PatientFK: user.id,
        level: this.level,
        active: '0',
      };

      console.log(' ', dailyAssessment);

      this.dailyAss.addDailyAssessment(dailyAssessment).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigateByUrl('/assessment-review');
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      this.router.navigateByUrl('/assessment', {
        state: { questionNumber: this.questionNumber, answer: this.answer },
      });
    }
  }
  //Nav
  back() {
    this.location.back();
  }
}
