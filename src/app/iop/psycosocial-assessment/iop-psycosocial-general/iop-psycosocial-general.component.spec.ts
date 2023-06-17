import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IopPsycosocialGeneralComponent } from './iop-psycosocial-general.component';

describe('IopPsycosocialGeneralComponent', () => {
  let component: IopPsycosocialGeneralComponent;
  let fixture: ComponentFixture<IopPsycosocialGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IopPsycosocialGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IopPsycosocialGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
