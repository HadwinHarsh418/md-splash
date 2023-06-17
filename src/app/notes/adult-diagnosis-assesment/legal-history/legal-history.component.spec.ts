import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalHistoryComponent } from './legal-history.component';

describe('LegalHistoryComponent', () => {
  let component: LegalHistoryComponent;
  let fixture: ComponentFixture<LegalHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
