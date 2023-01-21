import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';

import { TaxFilingDetailComponent } from './component/tax-filing-detail/tax-filing-detail.component';
import { TaxComputationComponent } from './component/tax-computation/tax-computation.component';
import { AdditionalFilingComponent } from './component/additional-filing/additional-filing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewComponent } from './component/review/review.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { PopupSumaryjsonComponent } from './popup/popup-sumaryjson/popup-sumaryjson.component';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    TaxFilingDetailComponent,
    TaxComputationComponent,
    AdditionalFilingComponent,
    ReviewComponent,
    PopupSumaryjsonComponent,

  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    MatCardModule,
    ReactiveFormsModule,
    MatRadioModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
