import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionRecievedComponent } from './session-recieved.component';

describe('SessionRecievedComponent', () => {
  let component: SessionRecievedComponent;
  let fixture: ComponentFixture<SessionRecievedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionRecievedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionRecievedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
