import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = environment;
@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  constructor(private http: HttpClient) {}

  getAllResult() {
    return this.http.get(baseUrl.getAllResults);
  }
  addResult(result: any){
    return this.http.post(baseUrl.addResult, result)
  }
  getDailyResultByUserId(id: any) {
    return this.http.get(baseUrl.getDailyResultByUserId + id);
  }
  getDailyResultByAssessId(id: any) {
    return this.http.get(baseUrl.getDailyResultByAssessId + id);
  }
  getResultById(id: any) {
    return this.http.get(baseUrl.getResultById + '3');
  }
  updateResult(obj: any) {
    return this.http.patch(baseUrl.getResultById + obj.id, obj);
  }
  deleteResult(obj: string) {
    return this.http.delete(baseUrl.getResultById + obj);
  }
}
