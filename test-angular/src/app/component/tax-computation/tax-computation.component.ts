import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-tax-computation',
  templateUrl: './tax-computation.component.html',
  styleUrls: ['./tax-computation.component.css']
})
export class TaxComputationComponent implements OnInit {
  @Input() form: FormGroup;
  
  constructor(private app:AppComponent) { }

  ngOnInit(): void {
    this.form.get('saleAmount').valueChanges.subscribe(value => {
      this.form.get('taxAmount').setValue( this.calculateTotalVat(parseFloat(value)))
    })
  }
  calculateTotalVat(saleAmount:number):number{
    let result = saleAmount*0.07;
    return parseFloat(result.toFixed(2)) ;
  }

  checkError(fieldRef:string){
    return this.app.checkInvalid(fieldRef)
  }
  
}
