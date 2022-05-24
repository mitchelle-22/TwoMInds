import { Component, OnInit } from '@angular/core';
import { DiaryService } from 'src/app/services/diary.service';
import { Location} from '@angular/common';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
 
  constructor(private location:Location, private dairy : DiaryService, private formbuilder: FormBuilder,) { }

  ngOnInit(): void {
  }

  dairyForm = this.formbuilder.group({
    title: [''],
    story: ['']
  });

  add(obj : any){
    this.dairy.addJournal(obj);
  }

  back() {
    this.location.back();
  }

  onSubmit(){
   let obj  = {
      title: this.dairyForm.value.title,
      story: this.dairyForm.value.story,
    };
    // console.log(this.dairyForm.value);
    // this.obj.title = this.dairyForm.value.title;
    // this.obj.story = this.dairyForm.value.story;
    // this.add(this.obj);
    this.dairy.addJournal(obj).subscribe({
      next:(res)=>{
        console.log(res);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    });
    //service aadd diary
    
  }
}
