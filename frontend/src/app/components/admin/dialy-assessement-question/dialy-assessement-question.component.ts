import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Assessement } from 'src/app/models/assessement.models';
import { AssessmentsService } from 'src/app/services/assessments.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialy-assessement-question',
  templateUrl: './dialy-assessement-question.component.html',
  styleUrls: ['./dialy-assessement-question.component.css']
})
export class DialyAssessementQuestionComponent implements OnInit {

  showSidebar: boolean = true;

  assessement: any = {
    Date: new Date(),
    level: 0,
    image: [],
    Question: [],
    // active: true,
    // ResultFk : 5,
    // AssessmentFK: 1
  };

  levels = [
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
    { name: '5' },
  ];

  isLoading: boolean = false;

  constructor(private formbuilder: FormBuilder, private assessmentService: AssessmentsService) { }

  ngOnInit(): void {
  }

  onShowSidebar ():void {
    this.showSidebar = !this.showSidebar
  }

  assessentForm = this.formbuilder.group({
    question1: ['', Validators.required],
    question2: ['', Validators.required],
    question3: ['', Validators.required],
    question4: ['', Validators.required],
    level: [this.levels[5], Validators.required],
  })

  formatDate(myDate: any) : string{
    let date = myDate.getFullYear() + '-0' +(myDate.getMonth()+1) + '-' + myDate.getDate();
    return date ;
  }

  submit(){
    this.assessement = {
      Question: [this.assessentForm.value.question1, this.assessentForm.value.question2,
        this.assessentForm.value.question3, this.assessentForm.value.question4],
      image: ['', '', '', ''],
      Date: this.formatDate(new Date()),
      level: this.assessentForm.value.level.name,
      active:1
    }
    console.log(this.assessement);
    this.assessentForm.reset();

    this.isLoading = true;

    this.assessmentService.addAssessment(this.assessement).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.alert('Assessement has been saved.');
          this.isLoading = false
        },
        error: (error) => {
          this.alert(error)
          console.log(error);

          this.isLoading= false;
        }
      }
    )
  }

  alert(error: any){
    Swal.fire({
      text: error,
      width: 300,
      showConfirmButton: false,
      timer: 2000
    })
  }
}
