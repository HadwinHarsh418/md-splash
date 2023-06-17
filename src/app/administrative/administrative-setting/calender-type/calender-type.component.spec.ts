import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderTypeComponent } from './calender-type.component';

describe('CalenderTypeComponent', () => {
  let component: CalenderTypeComponent;
  let fixture: ComponentFixture<CalenderTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
