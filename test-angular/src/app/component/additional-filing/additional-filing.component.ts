import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-additional-filing',
  templateUrl: './additional-filing.component.html',
  styleUrls: ['./additional-filing.component.css']
})
export class AdditionalFilingComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() { }
  ngOnInit(): void {
    this.form.get('taxAmount').valueChanges.subscribe(value => {
      this.form.get('surcharge').setValue( this.calculateSurcharge(parseFloat(value)))
    })
    this.form.get('surcharge').valueChanges.subscribe(value => {

      this.form.get('totalAmount').setValue( this.calculatePenalty(parseFloat(value)))
    })
  }

  calculateSurcharge(taxAmount:number):number{
    let result = taxAmount * 0.1;
    return parseFloat(result.toFixed(2)); 
  }

  calculatePenalty(surChange:number):number{
    let taxAmount = parseFloat(this.form.get('taxAmount').value)
    let result = taxAmount + surChange + 200;
    return parseFloat(result.toFixed(2)); 
  }

}
