import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.css']
})
export class BookingModalComponent implements OnInit {

  users:any;

  constructor( private formbuilder: FormBuilder) { }

  bookingForm= this.formbuilder.group({
     date:[''],
     time:[''],
     notes:[''],
     

  })
  
  
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.bookingForm.value);
  }
  nu: number = 0;

  f(nu: number){
    this.nu = nu;
    console.log(nu);
    
  }
}
