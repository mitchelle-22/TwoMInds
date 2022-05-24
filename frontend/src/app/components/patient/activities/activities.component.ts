import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
import { RecomendationService } from 'src/app/services/recomendations.service';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  flag= false;

  list: any;

  isLoading = true;

  constructor(private recommend : RecomendationService,private act : ActivityService,private route : Router) { 
    // this.getAllActs();
    this.getAllRecomendations();
  }

  user = JSON.parse(localStorage.getItem('patient') as any);

  getAllRecomendations(){
    this.isLoading = true;
    this.recommend.getRecomendationByUserId(this.user.id).subscribe({
      next: (data:any) => {
      console.log(data);
      this.list = data[0].activity;
      console.log("List", this.list);
      
      if(this.list.length == 0){
              this.flag = true;
              this.isLoading = false;
        }

      this.isLoading = false;
    },
    error: (error: any) => {
      this.isLoading = false;
    }
  })
}
  // getAllActs(){
  //   this.act.getAllActivities().subscribe((data:any) => {
  //     this.list = data;
  //     console.log(this.list.length);
  //     if(this.list.length == 0){
  //       this.flag = true;
  //     }
  //     console.log(this.flag);
      
  //   })
  // }
  
  run(i:any){
    console.log(i);
    this.route.navigateByUrl('emotions',{state:{id:i}})
  }
  ngOnInit(): void {
    this.getAllRecomendations();
  }

}
