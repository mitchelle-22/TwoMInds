import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = environment;
@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  constructor(private http: HttpClient) { }
  
  getAllJournals() {
    return this.http.get(baseUrl.getAllJournals);
  }
  
  getJournalById(id: any) {
    return this.http.get(baseUrl.getJournalById + id);
  }
  getJournalByUserId(id: any) {
    return this.http.get(baseUrl.getJournalByUserId + id);
  }

  addJournal(Journal: any) {
    return this.http.post(baseUrl.addJournal, Journal)
    
  }

  updateJournal(Journal: any) {
    return this.http.patch(baseUrl.updateJournal + Journal.id, Journal);
    
  }

  deleteJournal(Journal: string){
    return this.http.delete(baseUrl.deleteJournal + Journal);

  }

}
