import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = environment;

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient){ }

  getAllBookings() {
    return this.http.get(baseUrl.getAllBookings);
  }
  addBooking(Booking: any){
    return this.http.post(baseUrl.addBooking, Booking)
  }
  getBookingById(id: any) {
    return this.http.get(baseUrl.getBookingById + id);
  }
  getBookingByUserId(id: any) {
    return this.http.get(baseUrl.getBookingByUserId + id);
  }
  updateBooking(obj: any) {
    return this.http.patch(baseUrl.getBookingById + obj.id, obj);
  }
  deleteBooking(obj: string) {
    return this.http.delete(baseUrl.getBookingById + obj);
  }
}
