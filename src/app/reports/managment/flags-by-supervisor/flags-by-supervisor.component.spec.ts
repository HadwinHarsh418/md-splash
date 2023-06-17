import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagsBySupervisorComponent } from './flags-by-supervisor.component';

describe('FlagsBySupervisorComponent', () => {
  let component: FlagsBySupervisorComponent;
  let fixture: ComponentFixture<FlagsBySupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagsBySupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagsBySupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
