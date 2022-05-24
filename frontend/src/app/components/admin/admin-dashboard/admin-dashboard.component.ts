import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { CalendarDay } from 'src/app/models/calender';
import { AssessmentsService } from 'src/app/services/assessments.service';
import { BookingService } from 'src/app/services/booking.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

    name = localStorage.getItem("admin-username");
  showSidebar: boolean = true;
  listBooking:any;
  isLoading: boolean = false;
  user: any = {
    firstname: ""
  };
  book:any;
  constructor(private users : UsersService, private assessments : AssessmentsService, private router: Router, private bookings:BookingService , private activatedRoute: ActivatedRoute, private storage : LocalStorageService) {
    this.runMain();
   }

  ngOnInit(): void {
    this.generateCalendarDays(this.monthIndex);
    this.getalluser();
    this.getAllAssessments();
    this.getAllBookings();
    this.onGetBookings();
    this.getBookingforUser();


  }

  logout():void {
    localStorage.removeItem("admin-token");
    localStorage.removeItem("admin-username");
    this.router.navigateByUrl("\admin-login");
   }

  numberOfUsers: number = 0;
  numberOfAssessments:number=0;
  numberOfBookings:number=0;

  getalluser(){
    this.isLoading = true;
    this.users.getallusers().subscribe((data:any) =>{
      this.isLoading = false;
      console.log("Data", data);

      this.numberOfUsers = data.length;
    },
    (error:any)=>{
      this.isLoading = false;
      console.log(error);
    })
  }

  getAllAssessments(){
    this.isLoading = true;
    this.assessments.getAllAssessments().subscribe((data:any)=>{
      this.numberOfAssessments=data.length;
      this.isLoading = false;
    },
    (error:any)=>{
      this.isLoading = false;
      console.log(error);
    })
  }

  getAllBookings() {
    this.isLoading = true;
    this.bookings.getAllBookings().subscribe((data:any)=>{
      this.numberOfBookings=data.length;
      this.isLoading = false;
    },
    (error:any)=>{
      this.isLoading = false;
      console.log(error);
    })
  }

  onGetBookings(){
    this.isLoading = true;
    this.bookings.getAllBookings().subscribe((response:any)=>{
      console.log(response);
      this.isLoading = false;
    },
    (error:any)=>{
      console.log(error);
      this.isLoading = false
    },
    ()=>{
      console.log("done getting bookings");
    })
  }

  getBookingforUser(){
    this.isLoading = true;
    let  user = JSON.parse(localStorage.getItem('patient') as any);
      this.bookings. getBookingByUserId(user.id).subscribe((data:any)=>{
        this.isLoading = false;
        this.listBooking = data
        console.log(this.listBooking);
       },
       (error:any)=>{
         console.log(error);
         this.isLoading = false
       })
    }

  calendar: CalendarDay[] = [];
  monthIndex: number = 0;
  displayMonth: string = '';

  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  private generateCalendarDays(monthIndex: number): void {
    // we reset our calendar every time
    this.calendar = [];

    let day: Date = new Date(
      new Date().setMonth(new Date().getMonth() + monthIndex)
    );
    let startingDateOfCalendar = this.getStartDateForCalendar(day);

    let dateToAdd = startingDateOfCalendar;
    console.log(day.getMonth());

    this.displayMonth = this.monthNames[day.getMonth() + 1];

    if (day.getMonth() == 11) this.displayMonth = this.monthNames[0];

    //make it 41 to show 6 weeks
    for (var i = 0; i < 42; i++) {
      this.calendar.push(new CalendarDay(new Date(dateToAdd)));

      dateToAdd = new Date(dateToAdd.setDate(dateToAdd.getDate() + 1));
    }
  }

  private getStartDateForCalendar(selectedDate: Date) {
    // for the day we selected let's get the previous month last day
    let lastDayOfPreviousMonth = new Date(selectedDate.setDate(0));

    // start by setting the starting date of the calendar same as the last day of previous month
    let startingDateOfCalendar: Date = lastDayOfPreviousMonth;

    if (startingDateOfCalendar.getDay() != 1) {
      do {
        startingDateOfCalendar = new Date(
          startingDateOfCalendar.setDate(startingDateOfCalendar.getDate() - 1)
        );
      } while (startingDateOfCalendar.getDay() != 1);
    }

    return startingDateOfCalendar;
  }




  //nav bar method
  onShowSidebar ():void {
    this.showSidebar = !this.showSidebar
  }

  runMain(){
    this.bookings.getAllBookings().subscribe((res)=>{
    this.book =res;
    console.log(this.book);

    })
}
}
