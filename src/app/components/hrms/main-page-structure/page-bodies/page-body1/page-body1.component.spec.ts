import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBody1Component } from './page-body1.component';

describe('PageBody1Component', () => {
  let component: PageBody1Component;
  let fixture: ComponentFixture<PageBody1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBody1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBody1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
