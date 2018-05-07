import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterAppraisalComponent } from './quarter-appraisal.component';

describe('QuarterAppraisalComponent', () => {
  let component: QuarterAppraisalComponent;
  let fixture: ComponentFixture<QuarterAppraisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarterAppraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
