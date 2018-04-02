import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarLogoComponent } from './nav-bar-logo.component';

describe('NavBarLogoComponent', () => {
  let component: NavBarLogoComponent;
  let fixture: ComponentFixture<NavBarLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
