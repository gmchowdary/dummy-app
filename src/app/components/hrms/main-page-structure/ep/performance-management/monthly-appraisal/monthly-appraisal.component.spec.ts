import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyAppraisalComponent } from './monthly-appraisal.component';

describe('MonthlyAppraisalComponent', () => {
  let component: MonthlyAppraisalComponent;
  let fixture: ComponentFixture<MonthlyAppraisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyAppraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
