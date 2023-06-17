import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionSummaryComponent } from './transition-summary.component';

describe('TransitionSummaryComponent', () => {
  let component: TransitionSummaryComponent;
  let fixture: ComponentFixture<TransitionSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitionSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
