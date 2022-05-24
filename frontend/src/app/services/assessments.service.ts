import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

const baseUrl = environment;

@Injectable({
  providedIn: 'root',
})
export class AssessmentsService {
  constructor(private http: HttpClient) {}

  getAllAssessments() {
    return this.http.get(baseUrl.getAllAssessments);
  }
  addAssessment(assessment: any){
    return this.http.post(baseUrl.addAssessment, assessment);
  }
  getAssessmentById(id: any) {
    return this.http.get(baseUrl.getAssessmentById + id);
  }
  updateAssessment(obj: any) {
    return this.http.patch(baseUrl.getAssessmentById + obj.id, obj);
  }
  deleteAssessment(obj: string) {
    return this.http.delete(baseUrl.getAssessmentById + obj);
  }
}
