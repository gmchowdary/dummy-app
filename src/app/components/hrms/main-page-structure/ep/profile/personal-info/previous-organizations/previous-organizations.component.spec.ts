import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousOrganizationsComponent } from './previous-organizations.component';

describe('PreviousOrganizationsComponent', () => {
  let component: PreviousOrganizationsComponent;
  let fixture: ComponentFixture<PreviousOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
