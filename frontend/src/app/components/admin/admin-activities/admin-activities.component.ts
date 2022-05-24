import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-activities',
  templateUrl: './admin-activities.component.html',
  styleUrls: ['./admin-activities.component.css']
})
export class AdminActivitiesComponent implements OnInit {
  showSidebar: boolean = true;
  
  name =  localStorage.getItem("admin-username");

  // activities:any;
  isLoading: boolean = false;

  activity =[

    { name: 'Emotions' },
    { name: 'Relaxation' },
    { name: 'Sleep' }

  ];

  eventsForm = this.formbuilder.group({
    actvityName : "",
    url:"",
    description: ""

});
activities:any;
  constructor(private router:Router,private act :ActivityService,private formbuilder: FormBuilder,private usersservice:UsersService)
  {
  this.onView();
}

  ngOnInit(): void {
  }
  onShowSidebar ():void {
    this.showSidebar = !this.showSidebar
  }
  searchText = '';
  characters = [];
  onView(): void {

    this.isLoading = true;
    this.act.getAllActivities().subscribe({
      next: (res: any) => {
        this.activities = res;
        console.log(this.activities);
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error)
        this.isLoading = false;
      },
    });
  }

  submit(){

 console.log("cliekded")
console.log(this.eventsForm.value);

    let activity = {
      name: this.eventsForm.value.actvityName,
      Description: this.eventsForm.value.description,
      img: "",
      audio:  this.eventsForm.value.url,
      active: 1
    }

    this.isLoading = true;

    this.act.addActivity(activity).subscribe({
      next: (res) => {
        console.log(res);
        console.log('Activity added', activity);
        this.eventsForm.reset();
        console.log('SUCCESSFULL');
        this.isLoading = false;
      },
      error: (error) =>{
        console.log(error);
        console.log("UNSUCCESSFULL");
        this.isLoading = false;
      }
    })



  }


 delete(activities:any):void{
   if(confirm("Are you sure yu want to delete?")){

    this.isLoading = true;
     this.act.deleteActivity(activities.id).subscribe(res =>{
       console.log(res);
       console.log("Successful");
       this.isLoading = false;
     }, (error) =>{
      console.log(error);
      console.log("UNSUCCESSFULL");
      this.isLoading = false;
    })
   }
   console.error("Unsuccessful");

 }

//  update(){

//   const acti = {
//     name: this.eventsForm.value.actvityName.name,
//     description: this.eventsForm.value.description,
//     img: "",
//     audio:  this.eventsForm.value.url,
//     active: 1
//   }
//   console.log('Activity updated', acti);
//   this.eventsForm.reset();

//   this.act.updateActivity(acti).subscribe({
//     next: (res) => {
//       console.log(res);
//       console.log('SUCCESSFULL');

//     },
//     error: (error) =>{
//       console.log(error);
//       console.log("UNSUCCESSFULL");

//     }
//   })


  // }


}
