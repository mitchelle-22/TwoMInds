import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { DiaryService } from 'src/app/services/diary.service';


@Component({
  selector: 'app-journal-all-entries',
  templateUrl: './journal-all-entries.component.html',
  styleUrls: ['./journal-all-entries.component.css']
})
export class JournalAllEntriesComponent implements OnInit {

  journal : any;
  constructor(private location:Location,private journals :DiaryService) { }

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.journals.getAllJournals().subscribe((data:any) =>{
      this.journal = data;
      console.log(this.journal);
      
    })
  }
  back() {
    this.location.back();
  }

}
