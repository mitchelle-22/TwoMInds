import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const baseUrl = environment;
@Injectable({
  providedIn: 'root'
})
export class TimeslotService {

  constructor(private http: HttpClient) {}

  getAllTimeslots() {
    return this.http.get(baseUrl.getAllTimeslots);
  }
  addTimeslot(timeslot: any){
    return this.http.post(baseUrl.addResult, timeslot)
  }
  getTimeslotById(id: any) {
    return this.http.get(baseUrl.getTimeslotById + id);
  }

  updateTimeslot(obj: any) {
    return this.http.patch(baseUrl.updateTimeslot+ obj.id, obj);
}

  deleteTimeslot(){
  return this.http.delete(baseUrl.deleteTimeslot )
}


}

