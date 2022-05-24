import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css']
})
export class TimeSlotComponent implements OnInit {

  constructor() { }

 

  ngOnInit(): void {
  }

  available = [
    "08:00am - 09:00 am",
    "09:00am - 10:00 am",
    "10:00am - 11:00 am",
    "11:00am - 12:00 pm",
  ]



  timeSlot = {
    booked: [
      "12:00pm - 13:00 pm",
      "13:00pm - 14:00 pm",
      "14:00pm - 15:00 pm",
    ],
    available: this.available,
    date: new Date(),
    active: "2",
  }

  


}
