import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IopPsycosocialDiagnosisComponent } from './iop-psycosocial-diagnosis.component';

describe('IopPsycosocialDiagnosisComponent', () => {
  let component: IopPsycosocialDiagnosisComponent;
  let fixture: ComponentFixture<IopPsycosocialDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IopPsycosocialDiagnosisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IopPsycosocialDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
