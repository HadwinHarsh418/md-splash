import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargeInfoSheetComponent } from './discharge-info-sheet.component';

describe('DischargeInfoSheetComponent', () => {
  let component: DischargeInfoSheetComponent;
  let fixture: ComponentFixture<DischargeInfoSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DischargeInfoSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargeInfoSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
