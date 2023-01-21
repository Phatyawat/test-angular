import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxFilingDetailComponent } from './tax-filing-detail.component';

describe('TaxFilingDetailComponent', () => {
  let component: TaxFilingDetailComponent;
  let fixture: ComponentFixture<TaxFilingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxFilingDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxFilingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
