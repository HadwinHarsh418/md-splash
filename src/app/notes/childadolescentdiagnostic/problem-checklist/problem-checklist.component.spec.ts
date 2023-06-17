import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemChecklistComponent } from './problem-checklist.component';

describe('ProblemChecklistComponent', () => {
  let component: ProblemChecklistComponent;
  let fixture: ComponentFixture<ProblemChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
