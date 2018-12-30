import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCountComponent } from './employee-count.component';

describe('EmployeeCountComponent', () => {
  let component: EmployeeCountComponent;
  let fixture: ComponentFixture<EmployeeCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
