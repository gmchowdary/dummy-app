import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdProofsComponent } from './id-proofs.component';

describe('IdProofsComponent', () => {
  let component: IdProofsComponent;
  let fixture: ComponentFixture<IdProofsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdProofsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdProofsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
