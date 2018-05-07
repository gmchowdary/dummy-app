import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialAppraisalComponent } from './special-appraisal.component';

describe('SpecialAppraisalComponent', () => {
  let component: SpecialAppraisalComponent;
  let fixture: ComponentFixture<SpecialAppraisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialAppraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
