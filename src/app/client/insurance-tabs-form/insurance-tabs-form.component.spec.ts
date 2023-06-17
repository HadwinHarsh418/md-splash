import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceTabsFormComponent } from './insurance-tabs-form.component';

describe('InsuranceTabsFormComponent', () => {
  let component: InsuranceTabsFormComponent;
  let fixture: ComponentFixture<InsuranceTabsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceTabsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceTabsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
