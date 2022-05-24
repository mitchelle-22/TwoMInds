import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DiaryService } from 'src/app/services/diary.service';
import { TimeslotService } from 'src/app/services/timeslot.service';
import { BookingService } from 'src/app/services/booking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  today: number = Date.now();
  showSidebar: boolean = true;
  name: string = "sfds";
  Id :any;
  res: any ={
    title: "",
    description: "",
    date: ""
  };
  timeSlots : any;
   books:any;
  time = [];
  userId : any;
  constructor(private location: Location,private router: Router,private journal : DiaryService,private formbuilder: FormBuilder,private available :TimeslotService,private book : BookingService) {
    this.userId =this.router.getCurrentNavigation()?.extras.state?.['user'];
    this.Id =this.router.getCurrentNavigation()?.extras.state?.['id'];
  }


  bookingForm= this.formbuilder.group({
    date:[''],
    time:[''],
    notes:[''],


 })
  ngOnInit(): void {
    console.log(this.Id);
    this.getJournalbyId();
    this.getAllTimeslots();
  }
  getJournalbyId(){
    this.journal.getJournalById(this.Id).subscribe((data) =>{
      this.res = data;
      console.log(this.res);

    })
  }
  back() {
    this.location.back();
  }
  onShowSidebar ():void {
    this.showSidebar = !this.showSidebar
  }


  onSubmit(){
    console.log(this.bookingForm.value);

   let booking = {
    notes: this.bookingForm.value.notes,
    date:this.bookingForm.value.date,
    time: this.bookingForm.value.time,
    active: 1,
    UserFk: this.userId
    }

    this.book.addBooking(booking).subscribe({
      next: (res:any) => {
        this.books = res;
        this.alert('Booking successful.');
        // this.isLoading = false;

        console.log(this.books)
        },
        error: (error) => {
          // this.isLoading = false;
          console.log(error);

        }
    });

  }
  getAllTimeslots(){
    this.available.getAllTimeslots().subscribe(
    (response)=>{
      this.timeSlots = response;
      console.log(this.timeSlots)
      this.time = this.timeSlots[0].available
      console.log(this.timeSlots[0].available),


    (error:any)=> console.log(error),
    ()=> console.log("Done getting timeslot")
    }
  );

}
alert(error: any){
  Swal.fire({
    text: error,
    width: 300,
    showConfirmButton: false,
    timer: 2000
  })
}

}
