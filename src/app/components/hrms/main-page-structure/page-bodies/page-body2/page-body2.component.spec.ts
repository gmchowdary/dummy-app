import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBody2Component } from './page-body2.component';

describe('PageBody2Component', () => {
  let component: PageBody2Component;
  let fixture: ComponentFixture<PageBody2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBody2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBody2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
