import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ResultsService } from 'src/app/services/results.service';

import {  Router } from '@angular/router';
import { Result } from 'src/app/models/results';
import { UsersService } from 'src/app/services/users.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.css']
})
export class ViewResultsComponent implements OnInit {


  result1:any;

  public id_3=3;
  public id_5=5;
  id : any;
  user:any;
  dd = {
    content: [
      {
        layout: 'lightHorizontalLines', // optional
        table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 1,
          widths: [ '*', 'auto', 100, '*' ],

          body: [
            [ 'First', 'Second', 'Third', 'The last one' ],
            [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
            [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
          ]
        }
      }
    ]
  };
  constructor( private location: Location, private results:ResultsService, private router: Router, private users : UsersService ) { 
    this.result1 =this.router.getCurrentNavigation()?.extras.state?.['result'];
   // console.log(this.id);
    
    this.onGetResults();
  }
  print(){
    console.log("***")
    pdfMake.createPdf(this.dd).download();
  }
  ngOnInit(): void {
    // this.run();
    console.log("Result: ", this.result1);
    
  }

  back() {
    this.location.back();
  }

  onGetResults(){

  this.user = JSON.parse(localStorage.getItem('patient') as any);
  // console.log(this.user.email);
  
  //   this.results.getDailyResultByUserId(this.user.id).subscribe((data:any)=>{
  //     this.result1 = data
  //     console.log(this.result1);
      
  //    })
  }





}
