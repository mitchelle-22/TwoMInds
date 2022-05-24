import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

const baseUrl = environment

@Injectable({
  providedIn: 'root'
})
export class DailyassessmentsService {
  
  constructor(private http:HttpClient) { }


  addDailyAssessment(dailyAssessment: any){
    return this.http.post(baseUrl.addDailyAssessment, dailyAssessment)
  }

  getDailyAllAssessments(){
    return this.http.get(baseUrl.getAllDailyAssessments);
  }
  getDailyAssessmentByUserId(id:any){
    return this.http.get(baseUrl.getDailyAssessmentByUserId+ id);
  }
  getDailyAssessmentByLevel(id:any){
    return this.http.get(baseUrl.getDailyAssessmentByLevel+ id);
  }
  getDailyAssessmentById(id:any){
    return this.http.get(baseUrl.getDailyAssessmentById+ id);
  }
  updateDailyAssessment(obj:any){
    return this.http.patch(baseUrl.getDailyAssessmentById+ obj.id,obj);
  }
  deleteDailyAssessment(obj:string){
    return this.http.delete(baseUrl.getDailyAssessmentById+ obj);
  }
}
