import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultsService } from 'src/app/services/results.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-results',
  templateUrl: './admin-results.component.html',
  styleUrls: ['./admin-results.component.css']
})
export class AdminResultsComponent implements OnInit {
  name: string = "";
  showSidebar: boolean = true;
 users:any;

 isLoading: boolean = false;

  constructor(private router:Router,private user : UsersService,private result : ResultsService, private formbuilder: FormBuilder) {  
    this.name =this.router.getCurrentNavigation()?.extras.state?.['email'];
}

resultsForm= this.formbuilder.group({
  status: [''],
  feedback: [''],
  rate: ['']
})

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.isLoading = true;
    this.user.getallusers().subscribe((res:any) => {
      this.users = res;
      console.log(this.users)
      this.isLoading = false;
    }, (error) => (this.isLoading = false))
  }
  onShowSidebar ():void {
    this.showSidebar = !this.showSidebar
  }

  searchText = '';
  characters = [];

  onSubmit(){
  let  results = {
      assessmentTaken: 0,
      status: this.resultsForm.value.status,
      feedback: this.resultsForm.value.feedback,
      rate: this.resultsForm.value.rate,
      Answers: [
         "",
         ""
       ],
       active: 1,
      //  AssessmentFK: 0,
       PatientResultFK:this.nu
     }
     this.addResult(results);
     
    // console.log(results);
  }

  addResult(results: any){
    this.isLoading = true;
    this.result.addResult(results).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.alert("Result added successfully", "")
          this.resultsForm.reset();
          this.isLoading = false;
        },
        error: (error) => {
          console.log(error.error);
          this.alert("*Internal Server error", "#FF0000" )
          this.resultsForm.reset();
          this.isLoading = false;
        }
      }
    );
  }

  nu: number = 0;

  f(nu: number){
    this.nu = nu;
    console.log(nu);
    
  }

  alert(error: any, color: string){
    Swal.fire({
      text: error,
      width: 300,
      color: color,
      showConfirmButton: false,
      timer: 2000
    })
  }
}

