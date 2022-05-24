import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.css']
})
export class SleepComponent implements OnInit {
  id:any;
  activity:any;
  private audio = new Audio();

  constructor(private activities:ActivityService,private router:Router) {
    this.id =this.router.getCurrentNavigation()?.extras.state?.['id'];
    this.getAllActivities();
  }

  ngOnInit(): void {
  }
  getAllActivities(){
    this.activities.getActivityById(this.id).subscribe((data:any) => {
      this.activity = data;
      console.log(this.activity);
    })
  }
  


}

