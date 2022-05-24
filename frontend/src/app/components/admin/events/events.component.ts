import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private activity : ActivityService) { }

  getAllActivities(){
    this.activity.getAllActivities().subscribe((data:any) => {
      console.log(data);
    })
  }
  ngOnInit(): void {
    this.getAllActivities();
  }

}
