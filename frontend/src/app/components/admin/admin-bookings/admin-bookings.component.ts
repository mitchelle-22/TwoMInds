import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.css']
})
export class AdminBookingsComponent implements OnInit {
  name = localStorage.getItem("admin-username");
  showSidebar: boolean = true;

  isLoading: boolean = false;
  bookings:any;
  constructor(private users :UsersService,private router:Router,private book :BookingService) {

    this.runMain();
}

  ngOnInit(): void {
  }
  onShowSidebar ():void {
    this.showSidebar = !this.showSidebar
  }

  searchText = '';
  characters = [];
  runMain(){
    this.isLoading = true;
    this.book.getAllBookings().subscribe((res)=>{
    this.bookings =res;
    this.isLoading = false;
    console.log(this.bookings);
    },(error) => {
      this.isLoading = false;
    })
  }
}
