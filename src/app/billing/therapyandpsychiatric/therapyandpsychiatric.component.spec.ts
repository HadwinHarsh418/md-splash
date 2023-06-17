import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapyandpsychiatricComponent } from './therapyandpsychiatric.component';

describe('TherapyandpsychiatricComponent', () => {
  let component: TherapyandpsychiatricComponent;
  let fixture: ComponentFixture<TherapyandpsychiatricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapyandpsychiatricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapyandpsychiatricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
