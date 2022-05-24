import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings :any;
  constructor(private location: Location,private book : BookingService) {
    this.run();
   }

  ngOnInit(): void {
  }
  back() {
    this.location.back();
  }
  run(){
    let id = JSON.parse(localStorage.getItem('patient') as any);
    this.book.getBookingByUserId(id.id).subscribe((res)=> {
this.bookings = res;
console.log(this.bookings);

    })
  }

}
