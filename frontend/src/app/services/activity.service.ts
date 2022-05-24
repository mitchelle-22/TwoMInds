import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = environment;

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(private http: HttpClient) {}

  getAllActivities() {
    return this.http.get(baseUrl.getAllActivities);
  }
  addActivity(activity: any){
    return this.http.post(baseUrl.addActivity, activity)
  }
  getActivityById(id: any) {
    return this.http.get(baseUrl.getActivityById + id);
  }
  updateActivity(obj: any) {
    return this.http.patch(baseUrl.getActivityById + obj.id, obj);
  }
  deleteActivity(obj: string) {
    return this.http.delete(baseUrl.getActivityById + obj);
  }
}
