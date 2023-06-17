import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualSessionCountComponent } from './annual-session-count.component';

describe('AnnualSessionCountComponent', () => {
  let component: AnnualSessionCountComponent;
  let fixture: ComponentFixture<AnnualSessionCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualSessionCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualSessionCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
