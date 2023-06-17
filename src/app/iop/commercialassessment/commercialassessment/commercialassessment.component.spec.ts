import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COMMERCIALASSESSMENTComponent } from './commercialassessment.component';

describe('COMMERCIALASSESSMENTComponent', () => {
  let component: COMMERCIALASSESSMENTComponent;
  let fixture: ComponentFixture<COMMERCIALASSESSMENTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COMMERCIALASSESSMENTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COMMERCIALASSESSMENTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
