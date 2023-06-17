import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualSessionCountPayComponent } from './annual-session-count-pay.component';

describe('AnnualSessionCountPayComponent', () => {
  let component: AnnualSessionCountPayComponent;
  let fixture: ComponentFixture<AnnualSessionCountPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualSessionCountPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualSessionCountPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
