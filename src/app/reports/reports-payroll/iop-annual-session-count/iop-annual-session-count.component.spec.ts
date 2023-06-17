import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IopAnnualSessionCountComponent } from './iop-annual-session-count.component';

describe('IopAnnualSessionCountComponent', () => {
  let component: IopAnnualSessionCountComponent;
  let fixture: ComponentFixture<IopAnnualSessionCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IopAnnualSessionCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IopAnnualSessionCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
