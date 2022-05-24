import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DailyassessmentsService } from 'src/app/services/dailyassessments.service';
import { ResultsService } from 'src/app/services/results.service';
import { CalendarDay } from '../../../models/calender';
import { ChunkPipe } from '../../../pipes/chunkpipe';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-progress-results',
  templateUrl: './progress-results.component.html',
  styleUrls: ['./progress-results.component.css'],
})
export class ProgressResultsComponent implements OnInit {
  results = [
    {
      date: '',
    }
  ];

  num: number = 0;

  //check date and make it be highlighted
  checkDate(checkDate: any) {
    let dateHasMatched = false;
    this.results.forEach((result) => {
      this.num++;

      if (this.changeDate(result.date) == checkDate) {
        dateHasMatched = true;
      }
    });

    return dateHasMatched;
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
listResult:any;
  constructor(private chunck: ChunkPipe, private dialyAssessment: DailyassessmentsService,private location: Location) {}

  user = JSON.parse(localStorage.getItem('patient') as any);

  ngOnInit(): void {
    this.generateCalendarDays(this.monthIndex);
    this.dialyAssessment.getDailyAssessmentByUserId(this.user.id).subscribe({
      next: (res: any) => {
        this.results =  res;
        console.log(res);


      },
      error: (error) => console.log(error)
    })
    
  }
 

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

  public decreaseMonth() {
    this.monthIndex--;
    this.generateCalendarDays(this.monthIndex);
  }

  public setCurrentMonth() {
    this.monthIndex = 0;
    this.generateCalendarDays(this.monthIndex);
  }

  viewDate: any;

  viewAssessment(myDate: any) {
    console.log(myDate);

    let formatedDate =
      this.monthNames[myDate.getMonth()] +
      ' ' +
      myDate.getDate() +
      ', ' +

      myDate.getFullYear();
    console.log(formatedDate);
  }



//make date to be of format Month Day Year
  changeDate(myDate: any) {
    myDate = new Date(myDate)

    let formatedDate =
      this.monthNames[myDate.getMonth()] +
      ' ' +
      myDate.getDate() +
      ', ' +

      myDate.getFullYear();
   return formatedDate;
  }


  // getAllResults(){
  //   this.result.getAllResult().subscribe((data:any) => {
  //     console.log(data);
  //   })
  // }

  back() {
    this.location.back();
  }
}
