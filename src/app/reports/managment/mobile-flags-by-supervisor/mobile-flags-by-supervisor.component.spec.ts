import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFlagsBySupervisorComponent } from './mobile-flags-by-supervisor.component';

describe('MobileFlagsBySupervisorComponent', () => {
  let component: MobileFlagsBySupervisorComponent;
  let fixture: ComponentFixture<MobileFlagsBySupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileFlagsBySupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileFlagsBySupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
