import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargeSumaaryComponent } from './discharge-sumaary.component';

describe('DischargeSumaaryComponent', () => {
  let component: DischargeSumaaryComponent;
  let fixture: ComponentFixture<DischargeSumaaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DischargeSumaaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargeSumaaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
