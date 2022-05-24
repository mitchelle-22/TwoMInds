import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssessmentsService } from 'src/app/services/assessments.service';
import { DailyassessmentsService } from 'src/app/services/dailyassessments.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css'],
})
export class AssessmentsComponent implements OnInit {
  level:any;
  id:any;
  
  constructor(
    private dailyAss: DailyassessmentsService,
    private router: Router,
    private assessment: AssessmentsService,
    private location: Location
  ) {
    let routerValue =
      this.router.getCurrentNavigation()?.extras.state?.['questionNumber'];

    let answerValue =
      this.router.getCurrentNavigation()?.extras.state?.['answer'];

    //this will update question value from more about question
    this.questionNumber = routerValue ? routerValue : this.questionNumber;
    this.answers = answerValue ? answerValue : this.answers;
  }

  question: any;
  image = [
    '../../../../../../assets/images/image1.png',
    '../../../../../../assets/images/image2.png',
    '../../../../../../assets/images/image3.png',
    '../../../../../../assets/images/image4.png',
  ];
  
  answers: any[] = [];

  questionAvailable = false;

  ngOnInit(): void {

    // have to get asssessemnt by id
    this.isLoading = true
    this.assessment.getAllAssessments().subscribe({
      next: (res: any) => {

        if(res.length == 0){
          console.log("No questions");
          this.isLoading = false;
          this.questionAvailable = false;
        }else{
          this.question = res[res.length-1].Question;
          this.id = res[res.length-1].id
          this.isLoading = false;   
          this.questionAvailable = true;
        } 
      },
      error: (error) => {
        this.isLoading = false;
      },
    });
  }

  user = JSON.parse(localStorage.getItem('patient') as any);

  isLoading: boolean = false;

  moreAboutQuestions() {
    this.questionNumber++;
    this.answers.push('Yes');

    if (this.questionNumber == 4) {
      this.isLoading = true;
      console.log('Last Quesiont ', this.answers);

      const dailyAssessment = {
       
        answer: this.answers,
        date: new Date(),
        AssessmentFk:this.id,
        PatientFK: this.user.id,
        // level: 2,
        active: 1
      };

      console.log(' ', localStorage.getItem('patient'));

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
      
      this.router.navigateByUrl('/moreAaboutQuestion', {
        state: { questionNumber: this.questionNumber, answer: this.answers, level: this.level },
      });
    }
  }

  questionNumber = 0;

  nextQuestion() {
    //once reaach the last question it take you to assessemnt review
    console.log('Question');
    this.answers.push('No');
    this.questionNumber++;
    if (this.questionNumber == 4) {
      this.isLoading = true;
      console.log('Last Quesiont ', this.answers);
      const dailyAssessment = {
        //id: 1,
        answer: this.answers,
        date: new Date(),
        // AssessmentFK: 1,
        PatientFK: this.user.id,
        AssessmentFk: this.id,
        active: 1
      };

      console.log(' ', localStorage.getItem('patient'));

      this.dailyAss.addDailyAssessment(dailyAssessment).subscribe({
        next: (res) => {
          console.log(res);
          //daiy assssemnt id

          this.router.navigateByUrl('/assessment-review');
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
  back() {
    this.location.back();
  }
}
