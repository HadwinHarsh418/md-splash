import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOfShiftComponent } from './end-of-shift.component';

describe('EndOfShiftComponent', () => {
  let component: EndOfShiftComponent;
  let fixture: ComponentFixture<EndOfShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndOfShiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndOfShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
