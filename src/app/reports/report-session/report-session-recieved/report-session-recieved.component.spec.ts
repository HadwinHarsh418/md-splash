import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSessionRecievedComponent } from './report-session-recieved.component';

describe('ReportSessionRecievedComponent', () => {
  let component: ReportSessionRecievedComponent;
  let fixture: ComponentFixture<ReportSessionRecievedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportSessionRecievedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSessionRecievedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
