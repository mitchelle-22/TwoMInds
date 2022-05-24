import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = environment;
@Injectable({
  providedIn: 'root'
})
export class RecomendationService {
  constructor(private http: HttpClient) {}

  getAllRecomendations() {
    return this.http.get(baseUrl.getAllRecomendations);
  }
  addRecomendation(recomendation: any){
    return this.http.post(baseUrl.addRecomendation, recomendation)
  }
  getRecomendationById(id: any) {
    return this.http.get(baseUrl.getRecomendationById + id);
  }
  getRecomendationByUserId(id: any) {
    return this.http.get(baseUrl.getRecomendationByUserId + id);
  }
  updateRecomendation(obj: any) {
    return this.http.patch(baseUrl.getRecomendationById + obj.id, obj);
  }
  deleteRecomendation(obj: string) {
    return this.http.delete(baseUrl.getRecomendationById + obj);
  }
}
