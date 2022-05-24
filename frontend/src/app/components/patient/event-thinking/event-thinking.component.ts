import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { DiaryService } from 'src/app/services/diary.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-event-thinking',
  templateUrl: './event-thinking.component.html',
  styleUrls: ['./event-thinking.component.css']
})
export class EventThinkingComponent implements OnInit {

  isLoading = false;
  date1: Date =new Date();

  dairyForm = this.formbuilder.group({
    title: [''],
    story: ['']
  });
 flag = false;
  Journal : any;
  constructor(private location: Location,private dairy : DiaryService,private formbuilder: FormBuilder,private router : Router) { }

  add(obj : any){
    this.dairy.addJournal(obj);
  }

  back() {
    this.location.back();
  }

  onSubmit(){
    let  user = JSON.parse(localStorage.getItem('patient') as any);
   let obj  = {
      title: this.dairyForm.value.title,
      description: this.dairyForm.value.story,
      date:this.date1,
      feedback: "",
      AdminJournalFk:1,
      UserJournalFk: user.id,
      time:"11:00" ,
      active:1
    };

    this.isLoading = true;

    this.dairy.addJournal(obj).subscribe({
      next:(res)=>{
        console.log(res);
        this.dairyForm.reset();
        this.isLoading = false;
        this.alert('Journal added successfully', '');
        //function to reload after submitting the joournal
        this.reloadPage()
      },
      error:(err)=>{
        console.log(err);
        this.isLoading = false;
        this.alert('*Internal Server error', '#FF0000');

        
      }
    });
    //service aadd diary
    
  }

  //reload page after submitting the joournal

  reloadPage() {
    setTimeout( () => {
      window.location.reload();
    },2000);

  }
  ngOnInit(): void {
    this.runs();
    console.log("**");
    
  }
  run(i:any){
  this.router.navigateByUrl("/journal-detail", {state: {id: i}});
  
  }
  runs(){
    let id = JSON.parse(localStorage.getItem("patient") as any);
    console.log(id.id);
    
    this.isLoading = true;

    this.dairy.getJournalByUserId(id.id).subscribe({
      next: (res) =>{
      this.isLoading = false;
      this.Journal = res;
      if(this.Journal.length == 0){
        this.flag = true;
      }
      
    }, 
    error: (error) => {

    this.isLoading = false;
    this.alert('*Internal Server error', '#FF0000');

  }})
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
}
