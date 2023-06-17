import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemCheckComponent } from './problem-check.component';

describe('ProblemCheckComponent', () => {
  let component: ProblemCheckComponent;
  let fixture: ComponentFixture<ProblemCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
