import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSumaryjsonComponent } from './popup-sumaryjson.component';

describe('PopupSumaryjsonComponent', () => {
  let component: PopupSumaryjsonComponent;
  let fixture: ComponentFixture<PopupSumaryjsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupSumaryjsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupSumaryjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
