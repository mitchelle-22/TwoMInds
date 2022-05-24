import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DiaryService } from 'src/app/services/diary.service';

@Component({
  selector: 'app-journal-details',
  templateUrl: './journal-details.component.html',
  styleUrls: ['./journal-details.component.css']
})
export class JournalDetailsComponent implements OnInit {
 userId : any;
 name : any;
 journals : any;
  constructor(private location:Location,private route: Router,private journal : DiaryService) {
    
    this.userId =this.route.getCurrentNavigation()?.extras.state?.['id'];
    this.name =this.route.getCurrentNavigation()?.extras.state?.['name'];
   }

  ngOnInit(): void {
    console.log(this.userId);
    console.log(this.name);
    this.getJournalUserId();
  }
  getJournalUserId(){
    this.journal.getJournalByUserId(this.userId).subscribe((data) =>{
      this.journals = data;
      console.log(data);
    })
  }
  run(id :any){
    console.log(id);
    this.route.navigateByUrl('user-details',{state: {id: id,user :this.userId }})
  }
  back() {
    this.location.back();
  }

}
