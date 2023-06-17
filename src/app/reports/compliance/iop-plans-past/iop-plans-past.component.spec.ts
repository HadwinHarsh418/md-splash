import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IopPlansPastComponent } from './iop-plans-past.component';

describe('IopPlansPastComponent', () => {
  let component: IopPlansPastComponent;
  let fixture: ComponentFixture<IopPlansPastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IopPlansPastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IopPlansPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
