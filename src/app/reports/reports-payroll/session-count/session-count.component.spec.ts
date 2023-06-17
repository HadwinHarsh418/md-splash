import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionCountComponent } from './session-count.component';

describe('SessionCountComponent', () => {
  let component: SessionCountComponent;
  let fixture: ComponentFixture<SessionCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
