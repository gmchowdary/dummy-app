import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageStructureComponent } from './main-page-structure.component';

describe('MainPageStructureComponent', () => {
  let component: MainPageStructureComponent;
  let fixture: ComponentFixture<MainPageStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
