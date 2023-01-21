import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopupSumaryjsonComponent } from './popup/popup-sumaryjson/popup-sumaryjson.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
 
  isStepFirst: boolean = false;

  form: FormGroup

  constructor(private fb: FormBuilder,
    private dialog: MatDialog) {
    this.form = this.fb.group({

      filingType: ["0", [Validators.required]],
      month: ['', [Validators.required]],
      year: ['', [Validators.required]],
      saleAmount: ['', [Validators.required]],
      taxAmount: ['', [Validators.required, this.validateTotalVat()]],
      surcharge: [''],
      penalty: ['200.00'],
      totalAmount: [''],
    });

    this.isStepFirst = true;
  }
  ngOnInit(): void {

  }


  validateTotalVat(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      return this.checkTotalVat(control.value) ? null : { name: true };
    };
  }

  checkTotalVat(taxAmount: number): boolean {
    let saleAmount: any;

    if (this.form) {
      saleAmount = this.form.get('saleAmount').value

      if (saleAmount) {
        saleAmount = parseFloat(this.form.get('saleAmount').value) * 0.07
      }


      if (taxAmount - saleAmount > 20 || saleAmount - taxAmount > 20) {
        return false
      }
    }

    return true
  }

  onClickNext() {
    if (this.form.valid) {
      this.isStepFirst = false
    }
  }

  checkInvalid(fieldRef: string): boolean {
    if (this.form) {
      return this.form.get(fieldRef).hasError('name')
    }
    return false;
  }

  openDialog() {

    this.dialog.open(PopupSumaryjsonComponent, {
      width: '50%',
      data:    JSON.stringify(this.form.value),
    });
  }

}
