import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-emotions',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.css']
})

export class EmotionsComponent implements OnInit {
  id:any;
  activity:any;
  private audio = new Audio();
 constructor( private act : ActivityService,private router: Router){
  this.id =this.router.getCurrentNavigation()?.extras.state?.['id'];
  this.getAllActivities();
  
 }
  ngOnInit(): void {
  }
  getAllActivities(){
    this.act.getActivityById(this.id).subscribe((data:any) => {
      this.activity = data;
      console.log(this.activity);
    })
  }
  // playSound(){
  //  this.audio.src="../../../../assets/audio/fm.mp3" ;
  //   this.audio.load();
  //   this.audio.play();
  // }
  // puaseSound(){
  //   this.audio.pause();
  // }



}


