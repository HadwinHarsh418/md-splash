import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeDocumentComponent } from './administrative-document.component';

describe('AdministrativeDocumentComponent', () => {
  let component: AdministrativeDocumentComponent;
  let fixture: ComponentFixture<AdministrativeDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrativeDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
