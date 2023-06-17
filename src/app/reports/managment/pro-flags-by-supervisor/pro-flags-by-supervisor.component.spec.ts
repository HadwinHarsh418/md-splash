import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProFlagsBySupervisorComponent } from './pro-flags-by-supervisor.component';

describe('ProFlagsBySupervisorComponent', () => {
  let component: ProFlagsBySupervisorComponent;
  let fixture: ComponentFixture<ProFlagsBySupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProFlagsBySupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProFlagsBySupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
