import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageStructureComponent } from './auth-page-structure.component';

describe('AuthPageStructureComponent', () => {
  let component: AuthPageStructureComponent;
  let fixture: ComponentFixture<AuthPageStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthPageStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPageStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
