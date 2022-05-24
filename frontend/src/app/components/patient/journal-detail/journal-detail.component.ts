import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiaryService } from 'src/app/services/diary.service';
import { Location} from '@angular/common';



@Component({
  selector: 'app-journal-detail',
  templateUrl: './journal-detail.component.html',
  styleUrls: ['./journal-detail.component.css']
})
export class JournalDetailComponent implements OnInit {
id:any;
journalObj:any;
  constructor(private router :Router,private location: Location,private dairy : DiaryService) { 
    this.id =this.router.getCurrentNavigation()?.extras.state?.['id'];
    console.log(this.id);
    this.run();
  }
  back() {
    this.location.back();
  }
run(){
  this.dairy.getJournalById(this.id).subscribe((res) =>{
    this.journalObj = res;
    console.log("**");
    
    console.log(this.journalObj);
    
  })
}
  ngOnInit(): void {
  }

}
