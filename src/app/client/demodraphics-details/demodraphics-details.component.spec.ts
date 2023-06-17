import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemodraphicsDetailsComponent } from './demodraphics-details.component';

describe('DemodraphicsDetailsComponent', () => {
  let component: DemodraphicsDetailsComponent;
  let fixture: ComponentFixture<DemodraphicsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemodraphicsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemodraphicsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
