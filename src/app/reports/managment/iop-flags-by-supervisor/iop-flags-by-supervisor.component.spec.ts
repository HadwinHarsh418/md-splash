import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IopFlagsBySupervisorComponent } from './iop-flags-by-supervisor.component';

describe('IopFlagsBySupervisorComponent', () => {
  let component: IopFlagsBySupervisorComponent;
  let fixture: ComponentFixture<IopFlagsBySupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IopFlagsBySupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IopFlagsBySupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
