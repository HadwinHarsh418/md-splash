import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeIntakeDocumentComponent } from './administrative-intake-document.component';

describe('AdministrativeIntakeDocumentComponent', () => {
  let component: AdministrativeIntakeDocumentComponent;
  let fixture: ComponentFixture<AdministrativeIntakeDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrativeIntakeDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeIntakeDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
