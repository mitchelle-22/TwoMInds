import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { FormBuilder } from '@angular/forms';

import{Router} from '@angular/router';
import{UsersService} from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-activity-review',
  templateUrl: './admin-activity-review.component.html',
  styleUrls: ['./admin-activity-review.component.css']
})
export class AdminActivityReviewComponent implements OnInit {
  name : string = 'mich';
  showSidebar: boolean = true;
    activities =[

      { name: 'Emotions' },
      { name: 'Relaxation' },
      { name: 'Sleep' }
    ];

    eventsForm = this.formbuilder.group({
      actvityName : [this.activities[3]],
      url:[],
      description: []

  });
  submit(){

    const activity = {
      name: this.eventsForm.value.actvityName.name,
      Description: this.eventsForm.value.description,
      img: "",
      audio:  this.eventsForm.value.url,
      active: 1
    }
    console.log('Activity added', activity);
    this.eventsForm.reset();

    this.activityservice.addActivity(activity).subscribe({
      next: (res) => {
        console.log(res);
        console.log('SUCCESSFULL');

      },
      error: (error) =>{
        console.log(error);
        console.log("UNSUCCESSFULL");

      }
    })


    }

  constructor(private formbuilder: FormBuilder,private activityservice: ActivityService,private usersservice:UsersService,private router:Router) {
    this.name =this.router.getCurrentNavigation()?.extras.state?.['email'];
   }

  ngOnInit(): void {

  }
  onShowSidebar ():void {
    this.showSidebar = !this.showSidebar
  }

}
