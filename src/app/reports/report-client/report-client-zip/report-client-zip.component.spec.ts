import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportClientZipComponent } from './report-client-zip.component';

describe('ReportClientZipComponent', () => {
  let component: ReportClientZipComponent;
  let fixture: ComponentFixture<ReportClientZipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportClientZipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportClientZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
