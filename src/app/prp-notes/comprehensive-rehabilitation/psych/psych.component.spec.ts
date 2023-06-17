import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychComponent } from './psych.component';

describe('PsychComponent', () => {
  let component: PsychComponent;
  let fixture: ComponentFixture<PsychComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
