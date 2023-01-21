import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-tax-filing-detail',
  templateUrl: './tax-filing-detail.component.html',
  styleUrls: ['./tax-filing-detail.component.css']
})
export class TaxFilingDetailComponent implements OnInit {
  @Input() form: FormGroup;

  monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  monthUseList: string[] = []

  yearList = [
    2020
  ]

  currentDate = new Date();

  constructor(private app:AppComponent) {
    this.monthUseList = this.monthList;
    this.getYearList()
  }

  ngOnInit(): void {
    this.form.get('year').valueChanges.subscribe(value => {
      this.getMonthList(parseInt(value));
    })
  }

  getYearList() {
    let range = this.currentDate.getFullYear() - 2020;
    for (let i = 1; i <= range; i++) {
      this.yearList.splice(0, 0, 2020+i)
    }
  }

  getMonthList(yearSelect: number) {
    if (yearSelect == this.currentDate.getFullYear()) {
     
      
      this.monthUseList = this.monthList.slice(0,this.currentDate.getMonth()+1) 
      if( this.monthUseList.length == 1){
        this.form.get('month').setValue(this.monthList[0])
      }
    } else {
      this.monthUseList = this.monthList
    }
  }

}
