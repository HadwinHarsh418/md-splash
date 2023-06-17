import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingIrpComponent } from './upcoming-irp.component';

describe('UpcomingIrpComponent', () => {
  let component: UpcomingIrpComponent;
  let fixture: ComponentFixture<UpcomingIrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingIrpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingIrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
