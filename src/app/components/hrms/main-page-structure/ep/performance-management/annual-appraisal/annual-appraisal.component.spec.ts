import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualAppraisalComponent } from './annual-appraisal.component';

describe('AnnualAppraisalComponent', () => {
  let component: AnnualAppraisalComponent;
  let fixture: ComponentFixture<AnnualAppraisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualAppraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
