import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalincidentreportComponent } from './criticalincidentreport.component';

describe('CriticalincidentreportComponent', () => {
  let component: CriticalincidentreportComponent;
  let fixture: ComponentFixture<CriticalincidentreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticalincidentreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalincidentreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
