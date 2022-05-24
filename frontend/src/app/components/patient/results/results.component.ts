import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsService } from 'src/app/services/results.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  listResult :any;

  isLoading: boolean = false;
 
  constructor(private result: ResultsService,private route : Router, private location: Location) {
   this.getResultforUser();
   }
   
  ngOnInit(): void {


  }

  getResultforUser(){
    this.isLoading = true;
    let  user = JSON.parse(localStorage.getItem('patient') as any);

      this.result.getDailyResultByUserId(user.id).subscribe({
        next: (data:any)=>{
        this.listResult = data
        console.log(this.listResult);
        this.isLoading = false;
       },
       error: (error) => this.isLoading = false
      })
    }

    run(result : any){
      this.route.navigateByUrl('view-results',  {state: {result: result}})
    }

    back() {
     this.location.back();
    }
}
