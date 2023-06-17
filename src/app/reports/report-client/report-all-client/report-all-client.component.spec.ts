import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAllClientComponent } from './report-all-client.component';

describe('ReportAllClientComponent', () => {
  let component: ReportAllClientComponent;
  let fixture: ComponentFixture<ReportAllClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportAllClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAllClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
