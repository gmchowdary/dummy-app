import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuLeftComponent } from './side-menu-left.component';

describe('SideMenuLeftComponent', () => {
  let component: SideMenuLeftComponent;
  let fixture: ComponentFixture<SideMenuLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
