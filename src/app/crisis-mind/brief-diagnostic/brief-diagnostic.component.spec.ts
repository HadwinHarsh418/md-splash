import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefDiagnosticComponent } from './brief-diagnostic.component';

describe('BriefDiagnosticComponent', () => {
  let component: BriefDiagnosticComponent;
  let fixture: ComponentFixture<BriefDiagnosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriefDiagnosticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
